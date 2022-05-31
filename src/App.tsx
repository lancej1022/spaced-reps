import { Component, createSignal, lazy } from 'solid-js';
// import { Routes, Route } from 'solid-app-router';

import * as styles from './App.css';
import { DOMMessage, DOMMessageResponse } from './chrome/DomEvaluator';
import QuestionCard from './components/QuestionCard';
import SearchField from './components/SearchField';
import { parseUrl } from './helpers';
// const LoginForm = lazy(() => import('./components/LoginForm'));
// const History = lazy(() => import('./components/History'));

const PAGES = {
  root: 'root',
};

const fakeProps = {
  questionName: 'Reverse Linked List',
  lastAttempted: new Date(), // will be a JS Date
  lcDifficultyLevel: 'easy' as const, // TODO: make this only accept 1-10
  userDefinedDifficulty: 2, // TODO: make this only accept 1-10
  timesSolved: 0,
  timesAttempted: 1,
  url: 'https://leetcode.com/problems/reverse-linked-list/',
};

const App: Component = () => {
  const [currentView, setCurrentView] = createSignal(PAGES.root);
  const [title, setTitle] = createSignal('');
  const [unformattedTitle, setUnformattedTitle] = createSignal('');
  const [url, setUrl] = createSignal('');
  const [isAnswered, setIsAnswered] = createSignal(false);
  const [difficulty, setDifficulty] = createSignal<string | undefined>(undefined);

  function getCurrentTab() {
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

        // TODO: manually saving this data in `useSignal` is pretty painful, we should extract this into some kind of solid-query thing
        const { unformattedTitle, formattedTitle } = parseUrl(tabs[0].url ?? '');
        setTitle(formattedTitle);
        setUnformattedTitle(unformattedTitle);
        setUrl(tabs[0].url ?? '');
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
            // console.log('response in getCurrentTab', response);
            setDifficulty(response?.difficulty);
            setIsAnswered(Boolean(response?.isAnswered));
          }
        );
      }
    );
  }

  async function saveUserResponse(
    formEvent: Event & {
      submitter: HTMLElement;
    } & {
      currentTarget: HTMLFormElement;
      target: Element;
    }
  ) {
    formEvent.preventDefault(); // avoid page reload
    const formData = new FormData(formEvent.target as HTMLFormElement); // TODO: this seems wrong
    const formElements = Object.fromEntries(formData);

    const userResponse = {
      difficulty: formElements.daysBeforReminder,
      name: title(),
      url: url(),
    };

    const key = unformattedTitle();
    chrome.storage.sync.set({ [key]: userResponse }, function () {
      // console.log('Value is set to ' + JSON.stringify(userResponse));
      loadAllResponses();
    });
  }

  function loadAllResponses() {
    chrome.storage.sync.get(null, (items) => {
      console.log('Value returned from sync.get is ' + JSON.stringify(items));
      // Pass any observed errors down the promise chain.
      if (chrome.runtime.lastError) {
        // return reject(chrome.runtime.lastError);
      }
      // Pass the data retrieved from storage down the promise chain.
      // resolve(items);
      testSize(items);
    });
  }

  function testSize(obj) {
    const size = new TextEncoder().encode(JSON.stringify(obj)).length;
    const kiloBytes = size / 1024;
    console.log('Size of all items in sync storage is ' + size);
    return kiloBytes;
  }

  getCurrentTab();
  loadAllResponses();

  return (
    <main class={styles.app}>
      {currentView() === PAGES.root && (
        <>
          {/* TODO: use the SolidJS equivalent of context so the SearchField can encapsulate its own search logic */}
          <SearchField />
          <QuestionCard {...fakeProps} />
          <p>{title()}</p>
          <span>{url()}</span>
          {/* {headlines()} */}
        </>
      )}
      {isAnswered() === true && (
        <>
          <h1>{title()}</h1>
          <form onSubmit={(event) => saveUserResponse(event)}>
            <label id="days-before-reminder-label">
              Enter the number of days (up to 100) until you are reminded to reattempt
              this problem. 0 means no reminder.
              <input
                required
                name="daysBeforReminder"
                id="days-before-reminder"
                type="number"
                max={100}
                min={0}
                value="1"
              />
            </label>
            <button type="submit">Set reminder</button>
          </form>
        </>
      )}
    </main>
  );
};

export default App;
