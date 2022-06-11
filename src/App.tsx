import { Component, createSignal, For, lazy } from "solid-js";
// import { Routes, Route } from 'solid-app-router';
const isLocal = false;

import * as styles from "./App.css";
import { DOMMessage, DOMMessageResponse } from "./chrome/DomEvaluator";
import QuestionCard from "./components/QuestionCard";
import { IQuestionCardProps } from "./components/QuestionCard/QuestionCard";
import SaveReminderForm from "./components/SaveReminderForm";
import SearchField from "./components/SearchField";
import { parseUrl } from "./helpers";
import { questionMocks } from "./mocks/questionMocks";

// function testSize(obj: [string, Record<string, unknown>][]) {
//   const size = new TextEncoder().encode(JSON.stringify(obj)).length;
//   const kiloBytes = size / 1024;
//   console.log(`Size of all items in sync storage is ${size} bytes.`);
//   return kiloBytes;
// }

export function loadAllResponses() {
  let itemsArr: [string, IQuestionCardProps][] = [];
  // TODO: extract 26-28 into a function so it isnt duplicated from 36-38
  if (isLocal) {
    itemsArr = questionMocks;
    itemsArr.sort((a, b) => Number(a[1].daysBeforeReminder) - Number(b[1].daysBeforeReminder));
    setExistingReminders(itemsArr);
    setFilteredReminders(itemsArr);
  } else {
    chrome.storage.sync.get(null, (items) => {
      // Pass any observed errors down the promise chain.
      // if (chrome.runtime.lastError) {
      //   // return reject(chrome.runtime.lastError);
      // }
      itemsArr = Object.entries(items);
      itemsArr.sort((a, b) => Number(a[1].daysBeforeReminder) - Number(b[1].daysBeforeReminder));
      setExistingReminders(itemsArr);
      setFilteredReminders(itemsArr);
    });
    // setCurrentView(PAGES.questionList);
  }
  // testSize(itemsArr);
}

export const PAGES = {
  questionList: "questionList",
  saveReminderForm: "saveReminderForm",
} as const;

export const [existingReminders, setExistingReminders] = createSignal<
  [string, IQuestionCardProps][]
>([]);
export const [filteredReminders, setFilteredReminders] = createSignal<
  [string, IQuestionCardProps][]
>([]);
export const [title, setTitle] = createSignal("");
export const [currentView, setCurrentView] = createSignal<keyof typeof PAGES>(PAGES.questionList);
export const [unformattedTitle, setUnformattedTitle] = createSignal("");
export const [url, setUrl] = createSignal("");

export function handleViewChange(
  event: MouseEvent & {
    currentTarget: HTMLAnchorElement;
    target: Element;
  },
  view: keyof typeof PAGES
) {
  event.preventDefault();
  setCurrentView(view);
}

const App: Component = () => {
  function handleInitialPageLoad() {
    if (isLocal) {
      loadAllResponses();
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
        console.log("tabs[0]", tabs[0]);

        // TODO: manually saving this data in `useSignal` is pretty painful, we should extract this into some kind of solid-query thing
        const { unformattedTitle, formattedTitle } = parseUrl(tabs[0].url ?? "");
        setTitle(formattedTitle);
        setUnformattedTitle(unformattedTitle);

        loadAllResponses();
        if (tabs[0].url?.includes("/submissions")) {
          setCurrentView(PAGES.saveReminderForm);
        }

        let questionUrl = tabs[0].url ?? "";
        console.log("questionUrl", questionUrl);
        if (questionUrl.includes("/submissions")) {
          questionUrl = questionUrl.replace("/submissions", "");
          console.log("questionUrl after replacing submissions", questionUrl);
        }
        setUrl(questionUrl);
        console.log("tabs[0]", tabs[0]);
        /**
         * Sends a single message to the content script(s) in the specified tab,
         * with an optional callback to run when a response is sent back.
         *
         * The runtime.onMessage event registered in `DomEvaluator` is fired in each content script
         * running in the specified tab for the current extension.
         */
        chrome.tabs.sendMessage(
          tabs[0].id || 0, // Current tab ID
          { type: "GET_DOM" } as DOMMessage, // Message type
          // Callback executed when the content script sends a response
          (response: DOMMessageResponse) => {
            console.log("response in handleInitialPageLoad", response);
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
          <For each={filteredReminders()}>
            {(item) => {
              return <QuestionCard {...item[1]} />;
            }}
          </For>
          <a
            class={`${styles.actionButton} ${styles.anchorBtn}`}
            href="/save-reminder"
            onClick={(event) => handleViewChange(event, PAGES.saveReminderForm)}
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
