// import.meta.env.MODE gets injected by Vite at build time. Its similar to `NODE_ENV` in webpack.
export const isLocal = import.meta.env.MODE === 'development';

import { Component, createSignal, createEffect } from 'solid-js';
import { createQuery } from '@tanstack/solid-query';
import styles from './App.css';
import QuestionsList from './components/QuestionsList/QuestionsList';
import SaveReminderForm from './components/SaveReminderForm/SaveReminderForm';
import PAGES from './constants/pages';
import helpers from './helpers';
// TODO: strip out the mocks when building for production because it drastically bloats the output JS bundle
import mocks from './mocks/questionMocks';
import type { ReminderInterface } from './components/QuestionCard/QuestionCard';
import type { DOMMessage, DOMMessageResponse } from './chrome/DomEvaluator';
import DatePicker from './components/DatePicker/DatePicker';
import { getAllStorageLocalData } from './promises/chromeStorage';

// Can be used to repopulate saved questions if you lose them for whatever reason
// mocks.questionMocks.forEach(([name, reminder]) => {
//   chrome.storage.local.set({ [name]: reminder }, function () {
//     // console.log('inside SaveReminderForm after setting, userResponse: ', userResponse);
//     // Pass any observed errors down the promise chain.
//     if (chrome.runtime.lastError) {
//       console.log('chrome.runtime.lastError: ', chrome.runtime.lastError);
//       // return reject(chrome.runtime.lastError);
//     }
//   });
// });

export function loadAllReminders(itemToDelete?: string) {
  let itemsArr: [string, ReminderInterface][] = [];
  if (isLocal) {
    if (itemToDelete) {
      itemsArr = existingReminders().filter(([name]) => name !== itemToDelete);
    } else {
      itemsArr = mocks.questionMocks;
    }

    helpers.sortByDaysRemainingBeforeReminder(itemsArr);

    setExistingReminders(itemsArr);
    setFilteredReminders(itemsArr);
  } else {
    chrome.storage.local.get(null, (items) => {
      // Pass any observed errors down the promise chain.
      // if (chrome.runtime.lastError) {
      //   // return reject(chrome.runtime.lastError);
      // }
      helpers.testSize(items);
      console.log('saved reminders', Object.entries(items));
      itemsArr = Object.entries(items);
      helpers.sortByDaysRemainingBeforeReminder(itemsArr);

      setExistingReminders(itemsArr);
      setFilteredReminders(itemsArr);
    });
  }
}

export const [existingReminders, setExistingReminders] = createSignal<
  [string, ReminderInterface][]
>([]);
export const [filteredReminders, setFilteredReminders] = createSignal<
  [string, ReminderInterface][]
>([]);
export const [title, setTitle] = createSignal('');
export const [currentView, setCurrentView] = createSignal<keyof typeof PAGES>(PAGES.questionList);
export const [unformattedTitle, setUnformattedTitle] = createSignal('');
export const [url, setUrl] = createSignal('');

function setReminderInfo(tabs: chrome.tabs.Tab[]) {
  if (!tabs[0]) return;

  if (tabs[0].url?.includes('educative')) {
    let educativeFormattedTitle = tabs[0].title?.replace(/\((.*)/g, '') ?? '';
    setTitle(educativeFormattedTitle);
    // unformattedTitle eventually gets used to set a `key`, so cannot have empty spaces or illegal characters
    let legalKeyToSave = educativeFormattedTitle.toLowerCase().replace(/\s/g, '-');
    if (legalKeyToSave[legalKeyToSave.length - 1] === '-') {
      legalKeyToSave = legalKeyToSave.slice(0, -1);
    }
    setUnformattedTitle(legalKeyToSave);
  } else if (tabs[0].url?.includes('algoexpert.io/questions')) {
    let algoExpertFormattedTitle = tabs[0].title?.split('|')[0]?.trim() ?? '';
    setTitle(algoExpertFormattedTitle);
    let legalKeyToSave = algoExpertFormattedTitle.toLowerCase().replace(/\s/g, '-');
    if (legalKeyToSave[legalKeyToSave.length - 1] === '-') {
      legalKeyToSave = legalKeyToSave.slice(0, -1);
    }
    setUnformattedTitle(legalKeyToSave);
  } else {
    // this block handles leetcode titles
    const { unformattedTitle, formattedTitle } = helpers.parseUrl(tabs[0].url ?? '');
    setTitle(formattedTitle);
    setUnformattedTitle(unformattedTitle);
  }
}

const App: Component = () => {
  const query = createQuery(() => ['reminders'], getAllStorageLocalData);

  // TODO: split up this logic somehow, its become a monstrosity
  function handleInitialPageLoad() {
    if (isLocal) {
      // loadAllReminders();
      getAllStorageLocalData().then((res) => {
        setExistingReminders(res);
        setFilteredReminders(res);
      });
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

        setReminderInfo(tabs);

        if (tabs[0].url?.includes('/submissions')) {
          setCurrentView('saveReminderForm');
        }
        // loadAllReminders(); // TODO: does this need to be moved PRIOR to the `/submissions` check? That originally worked, but seemed slow...
        getAllStorageLocalData().then((res) => {
          setExistingReminders(res);
          setFilteredReminders(res);
        });

        let questionUrl = tabs[0].url ?? '';
        if (questionUrl.includes('/submissions')) {
          questionUrl = questionUrl.replace('/submissions', '');
        }
        setUrl(questionUrl);
        /**
         * Sends a single message to the content script(s) in the specified tab,
         * with an optional callback to run when a response is sent back.
         * The runtime.onMessage event registered in `DomEvaluator` is fired in each content script
         * running in the specified tab for the current extension.
         */
        chrome.tabs.sendMessage(
          tabs[0].id || 0, // Current tab ID
          { type: 'GET_DOM' } as DOMMessage, // Message type
          // Callback executed when the content script sends a response
          (response: DOMMessageResponse) => {
            console.log('DomEvaluator response in handleInitialPageLoad', response);
            if (
              tabs[0]?.url?.includes('educative') &&
              tabs[0].title?.startsWith('Problem Challenge')
            ) {
              // get rid of things like ` (hard)#` from the h2 heading `Permutation in a String (hard)#`
              const problemTitle = response.headlines[0]?.replace(/\s\((.*)/g, '') || '';
              let keyToSave = problemTitle.toLowerCase().replace(/\s/g, '-');
              setTitle(problemTitle);
              setUnformattedTitle(keyToSave);
            }
          }
        );
      }
    );
  }

  handleInitialPageLoad();

  // DEBUGGING PURPOSES ONLY -- will wipe out the `storage.local` on every render
  // chrome.storage.local.clear();

  return (
    <main class={`${styles.app} bg-slate-800`}>
      <div class="flex place-self-start items-center">
        <img class="mr-3 w-6 h-6" src="/assets/rocket24.png" alt="rocketship logo" />
        <h1 class="text-lg ">Spaced Reps</h1>
      </div>
      {currentView() === PAGES.questionList && (
        <>
          <button onClick={() => setCurrentView('calendar')}>visit calendar</button>
          <QuestionsList />
        </>
      )}
      {currentView() === PAGES.saveReminderForm && <SaveReminderForm />}
      {currentView() === PAGES.calendar && <DatePicker />}
    </main>
  );
};

export default App;
