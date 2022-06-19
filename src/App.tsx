// import.meta.env.MODE gets injected by Vite at build time. Its similar to `NODE_ENV` in webpack.
export const isLocal = import.meta.env.MODE === 'development';

import { Component, createSignal, lazy } from 'solid-js';

import * as styles from './App.css';
import { DOMMessage, DOMMessageResponse } from './chrome/DomEvaluator';
import { IQuestionCardProps } from './components/QuestionCard/QuestionCard';
import QuestionsList from './components/QuestionsList';
import SaveReminderForm from './components/SaveReminderForm';
import { parseUrl, sortByDaysRemainingBeforeReminder, testSize } from './helpers';
import { questionMocksLarge } from './mocks/questionMocks';

export function loadAllReminders(itemToDelete?: string) {
  let itemsArr: [string, IQuestionCardProps][] = [];
  if (isLocal) {
    if (itemToDelete) {
      itemsArr = existingReminders().filter(([name]) => name !== itemToDelete);
    } else {
      itemsArr = questionMocksLarge;
    }

    sortByDaysRemainingBeforeReminder(itemsArr);

    setExistingReminders(itemsArr);
    setFilteredReminders(itemsArr);
  } else {
    chrome.storage.local.get(null, (items) => {
      // Pass any observed errors down the promise chain.
      // if (chrome.runtime.lastError) {
      //   // return reject(chrome.runtime.lastError);
      // }
      testSize(items);
      console.log('saved reminders', items);
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
  // TODO: split up this logic somehow, its become a monstrosity
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

        if (tabs[0].url?.includes('educative')) {
          let educativeFormattedTitle = tabs[0].title?.replace(/\((.*)/g, '') ?? '';
          setTitle(educativeFormattedTitle);
          // unformattedTitle eventually gets used to set a `key`, so cannot have empty spaces or illegal characters
          let legalKeyToSave = educativeFormattedTitle.toLowerCase().replace(/\s/g, '-');
          if (legalKeyToSave[legalKeyToSave.length - 1] === '-') {
            legalKeyToSave = legalKeyToSave.slice(0, -1);
          }
          setUnformattedTitle(legalKeyToSave);
        } else {
          // this block handles leetcode titles
          const { unformattedTitle, formattedTitle } = parseUrl(tabs[0].url ?? '');
          setTitle(formattedTitle);
          setUnformattedTitle(unformattedTitle);
        }

        if (tabs[0].url?.includes('/submissions')) {
          setCurrentView(PAGES.saveReminderForm);
        }
        loadAllReminders(); // TODO: does this need to be moved PRIOR to the `/submissions` check? That originally worked, but seemed slow...

        let questionUrl = tabs[0].url ?? '';
        if (questionUrl.includes('/submissions')) {
          questionUrl = questionUrl.replace('/submissions', '');
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
  // chrome.storage.local.clear();

  return (
    <main class={styles.app}>
      {currentView() === PAGES.questionList && <QuestionsList />}
      {currentView() === PAGES.saveReminderForm && <SaveReminderForm />}
    </main>
  );
};

export default App;
