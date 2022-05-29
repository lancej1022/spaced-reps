import { Component, createSignal, lazy, onMount } from 'solid-js';
// import { Routes, Route } from 'solid-app-router';

import * as styles from './App.css';
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
  const [currentPage, setCurrentPage] = createSignal(PAGES.root);
  const [url, setUrl] = createSignal<string>();

  onMount(() => {
    chrome.tabs?.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      const url = tabs[0]?.url;
      setUrl(url);
    });
  });

  return (
    <main class={styles.app}>
      {currentPage() === PAGES.root && (
        <>
          {/* TODO: use the SolidJS equivalent of context so the SearchField can encapsulate its own search logic */}
          <SearchField />
          <QuestionCard {...fakeProps} />
          <p>{url()}</p>
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
