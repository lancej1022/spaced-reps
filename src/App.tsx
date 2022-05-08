import { Component, createSignal, lazy } from 'solid-js';
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
  lcDifficultyLevel: 'easy', // TODO: make this only accept 1-10
  userDefinedDifficulty: 2, // TODO: make this only accept 1-10
  timesSolved: 0,
  timesAttempted: 1,
  url: 'https://leetcode.com/problems/reverse-linked-list/',
};

const App: Component = () => {
  const [currentPage, setCurrentPage] = createSignal(PAGES.root);

  return (
    <main class={styles.app}>
      {currentPage() === PAGES.root && (
        <>
          <SearchField />
          <QuestionCard {...fakeProps} />
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
