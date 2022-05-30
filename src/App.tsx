import { Component, createSignal, lazy } from 'solid-js';
// import { Routes, Route } from 'solid-app-router';

import * as styles from './App.css';
import { DOMMessage, DOMMessageResponse } from './chrome/DomEvaluator';
import QuestionCard from './components/QuestionCard';
import SearchField from './components/SearchField';
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
  const [headlines, setHeadlines] = createSignal<string[]>([]);

  function getCurrentTab() {
    /**
     * We can't use "chrome.runtime.sendMessage" for sending messages from Solid.
     * For sending messages from Solid we need to specify which tab to send it to.
     */
    chrome.tabs?.query(
      {
        active: true,
        currentWindow: true,
      },
      (tabs) => {
        console.log('tabs in getCurrentTab', tabs);
        /**
         * Sends a single message to the content script(s) in the specified tab,
         * with an optional callback to run when a response is sent back.
         *
         * The runtime.onMessage event registered in `DomEvaluator` is fired in each content script
         * running in the specified tab for the current extension.
         */
        chrome.tabs.sendMessage(
          tabs[0]?.id || 0, // Current tab ID
          { type: 'GET_DOM' } as DOMMessage, // Message type
          // Callback executed when the content script sends a response
          (response: DOMMessageResponse) => {
            setTitle(response.title);
            setHeadlines(response.headlines);
          }
        );
      }
    );
  }

  getCurrentTab();

  return (
    <main class={styles.app}>
      {currentView() === PAGES.root && (
        <>
          {/* TODO: use the SolidJS equivalent of context so the SearchField can encapsulate its own search logic */}
          <SearchField />
          <QuestionCard {...fakeProps} />
          {title()}
          {headlines()}
        </>
      )}
      {/* <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<History />} />
      </Routes> */}
    </main>
  );
};

export default App;
