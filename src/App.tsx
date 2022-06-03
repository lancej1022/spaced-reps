import { Component, createSignal, For, lazy } from 'solid-js';
// import { Routes, Route } from 'solid-app-router';

import * as styles from './App.css';
import { DOMMessage, DOMMessageResponse } from './chrome/DomEvaluator';
import QuestionCard from './components/QuestionCard';
import SaveReminderForm from './components/SaveReminderForm';
import SearchField from './components/SearchField';
import { parseUrl } from './helpers';

function testSize(obj: [string, any][]) {
  const size = new TextEncoder().encode(JSON.stringify(obj)).length;
  const kiloBytes = size / 1024;
  console.log(`Size of all items in sync storage is ${size} bytes.`);
  return kiloBytes;
}

export function loadAllResponses() {
  chrome.storage.sync.get(null, (items) => {
    // Pass any observed errors down the promise chain.
    // if (chrome.runtime.lastError) {
    //   // return reject(chrome.runtime.lastError);
    // }
    const itemsArr = Object.entries(items);

    itemsArr.sort(
      (a, b) => Number(a[1].daysBeforeReminder) - Number(b[1].daysBeforeReminder)
    );
    console.log(itemsArr);
    testSize(itemsArr);
    setExistingReminders(itemsArr);
    // setCurrentView(PAGES.questionList);
  });
}

export const PAGES = {
  questionList: 'questionList',
  saveReminderForm: 'saveReminderForm',
} as const;

export const [existingReminders, setExistingReminders] = createSignal<[string, any][]>(
  []
);
export const [filteredReminders, setFilteredReminders] = createSignal<[string, any][]>(
  []
);
export const [title, setTitle] = createSignal('');
export const [currentView, setCurrentView] = createSignal<keyof typeof PAGES>(
  PAGES.questionList
);
export const [unformattedTitle, setUnformattedTitle] = createSignal('');
export const [url, setUrl] = createSignal('');

const App: Component = () => {
  function handleInitialPageLoad() {
    /**
     * We can't use "chrome.runtime.sendMessage" for sending messages from the `popup.html`.
     * For sending messages from Solid we need to specify which tab to send it to.
     */
    chrome.tabs?.query(
      {
        active: true,
        currentWindow: true,
      },
      (tabs) => {
        if (!tabs[0]) return;
        console.log('tabs[0]', tabs[0]);

        // TODO: manually saving this data in `useSignal` is pretty painful, we should extract this into some kind of solid-query thing
        const { unformattedTitle, formattedTitle } = parseUrl(tabs[0].url ?? '');
        setTitle(formattedTitle);
        setUnformattedTitle(unformattedTitle);

        loadAllResponses();
        if (tabs[0].url.includes('/submissions')) {
          setCurrentView(PAGES.saveReminderForm);
        }

        let questionUrl = tabs[0].url ?? '';
        console.log('questionUrl', questionUrl);
        if (questionUrl.includes('/submissions')) {
          questionUrl = questionUrl.replace('/submissions', '');
          console.log('questionUrl after replacing submissions', questionUrl);
        }
        setUrl(questionUrl);
        console.log('tabs[0]', tabs[0]);
        /**
         * Sends a single message to the content script(s) in the specified tab,
         * with an optional callback to run when a response is sent back.
         *
         * The runtime.onMessage event registered in `DomEvaluator` is fired in each content script
         * running in the specified tab for the current extension.
         */
        chrome.tabs.sendMessage(
          tabs[0].id || 0, // Current tab ID
          { type: 'GET_DOM' } as DOMMessage, // Message type
          // Callback executed when the content script sends a response
          (response: DOMMessageResponse) => {
            console.log('response in handleInitialPageLoad', response);
          }
        );
      }
    );
  }

  function handleViewChange(
    event: MouseEvent & {
      currentTarget: HTMLAnchorElement;
      target: Element;
    },
    view: keyof typeof PAGES
  ) {
    event.preventDefault();
    setCurrentView(view);
  }

  handleInitialPageLoad();

  // DEBUGGING PURPOSES ONLY -- will wipe out the `sync.storage` on every render
  // chrome.storage.sync.clear();

  return (
    <main class={styles.app}>
      <a
        href={
          currentView() === PAGES.saveReminderForm ? '/save-reminder' : '/questions-list'
        }
        onClick={(event) =>
          handleViewChange(
            event,
            currentView() === PAGES.saveReminderForm
              ? PAGES.questionList
              : PAGES.saveReminderForm
          )
        }
      >
        {currentView() === PAGES.saveReminderForm
          ? 'Return to questions list'
          : `Save a reminder for ${title()}`}
      </a>
      {currentView() === PAGES.questionList && (
        <>
          {/* TODO: use the SolidJS equivalent of context so the SearchField can encapsulate its own search logic */}
          <SearchField />
          <For each={existingReminders()}>
            {(item) => {
              return <QuestionCard name={item[0]} {...item[1]} />;
            }}
          </For>
        </>
      )}
      {currentView() === PAGES.saveReminderForm && <SaveReminderForm />}
    </main>
  );
};

export default App;
