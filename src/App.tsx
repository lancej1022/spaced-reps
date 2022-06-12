import { Component, createSignal, For, lazy } from 'solid-js';
const isLocal = true;

import * as styles from './App.css';
import { DOMMessage, DOMMessageResponse } from './chrome/DomEvaluator';
import QuestionCard from './components/QuestionCard';
import { IQuestionCardProps } from './components/QuestionCard/QuestionCard';
import SaveReminderForm from './components/SaveReminderForm';
import SearchField from './components/SearchField';
import { parseUrl, sortByDaysRemainingBeforeReminder, testSize } from './helpers';
import { questionMocks } from './mocks/questionMocks';

export function loadAllReminders() {
  let itemsArr: [string, IQuestionCardProps][] = [];
  if (isLocal) {
    itemsArr = questionMocks;
    sortByDaysRemainingBeforeReminder(itemsArr);
    setExistingReminders(itemsArr);
    setFilteredReminders(itemsArr);
  } else {
    chrome.storage.sync.get(null, (items) => {
      // Pass any observed errors down the promise chain.
      // if (chrome.runtime.lastError) {
      //   // return reject(chrome.runtime.lastError);
      // }
      testSize(items);
      itemsArr = Object.entries(items);
      sortByDaysRemainingBeforeReminder(itemsArr);
      setExistingReminders(itemsArr);
      setFilteredReminders(itemsArr);
    });
  }
}

export const PAGES = {
  questionList: 'questionList',
  saveReminderForm: 'saveReminderForm',
} as const;

export const [existingReminders, setExistingReminders] = createSignal<
  [string, IQuestionCardProps][]
>([]);
export const [filteredReminders, setFilteredReminders] = createSignal<
  [string, IQuestionCardProps][]
>([]);
export const [title, setTitle] = createSignal('');
export const [currentView, setCurrentView] = createSignal<keyof typeof PAGES>(PAGES.questionList);
export const [unformattedTitle, setUnformattedTitle] = createSignal('');
export const [url, setUrl] = createSignal('');

const App: Component = () => {
  const [isHovered, setIsHovered] = createSignal(false);

  function handleInitialPageLoad() {
    if (isLocal) {
      loadAllReminders();
      return;
    }
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
        console.log('unformattedTitle', unformattedTitle);
        console.log('formattedTitle', formattedTitle);
        setTitle(formattedTitle);
        setUnformattedTitle(unformattedTitle);

        loadAllReminders();
        if (tabs[0].url?.includes('/submissions')) {
          setCurrentView(PAGES.saveReminderForm);
        }

        let questionUrl = tabs[0].url ?? '';
        if (questionUrl.includes('/submissions')) {
          questionUrl = questionUrl.replace('/submissions', '');
          console.log('questionUrl after replacing submissions', questionUrl);
        }
        setUrl(questionUrl);
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

  handleInitialPageLoad();

  // DEBUGGING PURPOSES ONLY -- will wipe out the `sync.storage` on every render
  // chrome.storage.sync.clear();

  return (
    <main class={styles.app}>
      {currentView() === PAGES.questionList && (
        <>
          <SearchField />
          <section
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            class={`${styles.questionsContainer} ${
              isHovered() && styles.questionsContainerHovered
            }`}
          >
            <For each={filteredReminders()}>
              {(item) => {
                return <QuestionCard {...item[1]} />;
              }}
            </For>
          </section>
          <a
            class={`${styles.actionButton} ${styles.anchorBtn}`}
            href="/save-reminder"
            onClick={(event) => {
              event.preventDefault();
              setCurrentView(PAGES.saveReminderForm);
            }}
          >
            Save Reminder
          </a>
        </>
      )}
      {currentView() === PAGES.saveReminderForm && <SaveReminderForm />}
    </main>
  );
};

export default App;
