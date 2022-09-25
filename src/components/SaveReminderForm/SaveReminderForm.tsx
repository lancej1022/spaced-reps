import { createSignal, onCleanup, onMount } from 'solid-js';
import {
  title,
  url,
  unformattedTitle,
  loadAllReminders,
  setCurrentView,
  existingReminders,
} from '~/App';
import helpers from '~/helpers';
import questionListStyles from '../QuestionsList/QuestionsList.css';
import styles from './SaveReminderForm.css';
import type { ReminderInterface } from '../QuestionCard/QuestionCard';

export const [reminderToSearchFor, setReminderToSearchFor] = createSignal('');
const [currentReminder, setCurrentReminder] = createSignal<ReminderInterface | undefined>();

export default function SaveReminderForm() {
  let categoriesSelectRef: HTMLSelectElement | undefined = undefined;

  async function saveUserResponse(
    formEvent: Event & {
      submitter: HTMLElement;
    } & {
      currentTarget: HTMLFormElement;
      target: Element;
    }
  ) {
    formEvent.preventDefault(); // avoid page reload
    const formData = new FormData(formEvent.target as HTMLFormElement);
    const formElements = Object.fromEntries(formData);
    const selectedCategories = [];

    if (categoriesSelectRef?.options) {
      for (let option of categoriesSelectRef.options) {
        if (option.selected === true) selectedCategories.push(option.value);
      }
    }

    const userResponse: ReminderInterface = {
      daysBeforeReminder: String(formElements.daysBeforeReminder),
      name: currentReminder()?.name ?? title(),
      url: currentReminder()?.url ?? url(),
      timeStamp: new Date().toISOString(),
      categories: selectedCategories,
      notes: formElements.notes?.toString() ?? '',
    };

    let key = title();
    // TODO: this might be unnecessary -- we can probably just rely on `currentReminder.name` when present and fallback `title()`
    if (url().includes('leetcode')) {
      key = unformattedTitle();
    }
    if (currentReminder()?.name) {
      key = currentReminder()?.name ?? title();
    }

    if (import.meta.env.MODE === 'development') {
      loadAllReminders(key);
    } else {
      // TODO: we should do an optimistic delete that doesnt require refetching the entire storage
      chrome.storage.local.set({ [key]: userResponse }, function () {
        console.log('inside SaveReminderForm after setting, userResponse: ', userResponse);
        // Pass any observed errors down the promise chain.
        if (chrome.runtime.lastError) {
          console.log('chrome.runtime.lastError: ', chrome.runtime.lastError);
          // return reject(chrome.runtime.lastError);
        }
        loadAllReminders();
        setCurrentView('questionList');
      });
    }
  }

  function findCurrentReminder() {
    for (let i = 0; i < existingReminders().length; i++) {
      let reminderTitle = existingReminders()[i]?.[0];
      if (reminderToSearchFor()) {
        if (existingReminders()[i]?.[1].name === reminderToSearchFor()) {
          return existingReminders()[i]?.[1];
        }
      } else if (
        reminderTitle === title() ||
        // TODO: do we need the `unformattedTitle` check? seems specific to LC, and might not be necessary
        reminderTitle === unformattedTitle()
      ) {
        return existingReminders()[i]?.[1];
      }
    }
  }

  onMount(() => {
    setCurrentReminder(findCurrentReminder());
  });

  onCleanup(() => {
    setCurrentReminder();
    setReminderToSearchFor('');
  });

  return (
    <>
      <h1 class={styles.heading1}>
        Reminder for {currentReminder() ? currentReminder()?.name : title()}
      </h1>
      <form class={styles.saveReminderForm} onSubmit={saveUserResponse}>
        <p>
          Previous reminder was set for {currentReminder()?.daysBeforeReminder}{' '}
          {Number(currentReminder()?.daysBeforeReminder) > 1 ? 'days' : 'day'}
        </p>
        <div class={styles.inputWrapper}>
          <label for="days-before-reminder" id="days-before-reminder-label">
            {/* TODO: insert asterisk pseudoelement for proper a11y, and make it reddish */}
            Number of days until next attempt
          </label>
          <input
            class={styles.numberInput}
            required
            name="daysBeforeReminder"
            id="days-before-reminder"
            type="number"
            max={90}
            min={0}
            value={
              currentReminder()?.timeStamp
                ? Number(currentReminder()?.daysBeforeReminder) -
                  helpers.dateDiffInDays(new Date(currentReminder()?.timeStamp ?? ''), new Date())
                : '1'
            }
          />
        </div>
        <div class={styles.textAreaWrapper}>
          <label for="categories" id="categories-label">
            Categorize this problem
          </label>
          <select
            class={styles.categoriesSelect}
            multiple
            name="categories"
            id="categories"
            ref={categoriesSelectRef}
            // TODO: this doesnt handle multiple values
            value={currentReminder()?.categories}
          >
            <option value="slidingWindow">Sliding Window</option>
            <option value="twoPointers">Two Pointers</option>
            <option value="fastAndSlowPointers">Fast and Slow Pointers</option>
            <option value="mergeIntervals">Merge Intervals</option>
            <option value="cyclicSort">Cyclic Sort</option>
            <option value="reverseLinkedList">Reverse Linked List</option>
            <option value="bfs">Breadth First Search</option>
            <option value="dfs">Depth First Search</option>
            <option value="heaps">Heaps</option>
            <option value="subsets">Subsets</option>
            <option value="xor">Bitwise XOR</option>
            <option value="topElements">Top K Elements</option>
            <option value="kWayMerge">K Way Merge</option>
            <option value="dp">Dynammic Programming</option>
            <option value="topologicalSort">Topological Sort (Graph)</option>
            <option value="binarySearch">Binary Search</option>
          </select>
        </div>
        <div class={styles.textAreaWrapper}>
          <label for="notes" id="notes-label">
            Save any notes about this algo
          </label>
          <textarea
            class={styles.textInput}
            name="notes"
            id="notes"
            placeholder="Relies on two pointer solution and also ... runs in O(n) time and consumes O(k) space ..."
            value={currentReminder()?.notes ?? ''}
          />
        </div>
        <div class={styles.btnWrapper}>
          <button class={questionListStyles.actionButton} type="submit">
            Save
          </button>
          <a
            class={styles.returnLink}
            href="/questions-list"
            onClick={(event) => {
              event.preventDefault();
              setCurrentView('questionList');
            }}
          >
            Return to questions
          </a>
        </div>
      </form>
    </>
  );
}
