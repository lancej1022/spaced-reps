import { isLocal } from '~/App';
import { ReminderInterface } from '~/components/QuestionCard/QuestionCard';
import helpers from '~/helpers';
// TODO: strip out the mocks when building for production because it drastically bloats the output JS bundle
import mocks from '../mocks/questionMocks';

/**
 * @description Promise wrapper around the Chrome storage.local.get functionality, which is normally callback based.
 * @returns Promise
 */
export function getAllStorageLocalData(): Promise<[string, ReminderInterface][]> {
  // Immediately return a promise and start asynchronous work
  return new Promise((resolve, reject) => {
    let itemsArr: [string, ReminderInterface][] = [];
    if (isLocal) {
      itemsArr = mocks.questionMocks.slice(0, 10);

      helpers.sortByDaysRemainingBeforeReminder(itemsArr);

      resolve(itemsArr);
    } else {
      // Asynchronously fetch all data from storage.sync.
      chrome.storage.local.get(null, (items) => {
        // Pass any observed errors down the promise chain.
        if (chrome.runtime.lastError) {
          return reject(chrome.runtime.lastError);
        }

        // helpers.testSize(items);
        console.log('saved reminders', Object.entries(items));
        const itemsArr: [string, ReminderInterface][] = Object.entries(items);
        helpers.sortByDaysRemainingBeforeReminder(itemsArr);
        // Pass the data retrieved from storage down the promise chain.
        resolve(itemsArr);
      });
    }
  });
}

/**
 * @description Promise-based wrapper around chrome.storage.local.set. Sets or overwrites a reminder in the chrome extension storage.
 * @param key the name of the reminder, as a string
 * @param userResponse necessary form data to update a reminder
 * @returns void
 */
export function updateExistingReminder(
  key: string,
  userResponse: ReminderInterface
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isLocal) {
      resolve();
    } else {
      chrome.storage.local.set({ [key]: userResponse }, function () {
        // Pass any observed errors down the promise chain.
        if (chrome.runtime.lastError) {
          console.log('chrome.runtime.lastError:', chrome.runtime.lastError);
          return reject(chrome.runtime.lastError);
        }

        resolve();
      });
    }
  });
}

/**
 * @description Promise-based wrapper around chrome.storage.local.remove. Permanently removes a reminder from the list of reminders.
 * @param key the name of the reminder, as a string
 * @returns void
 */
export function removeReminder(key: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (isLocal) {
      resolve();
    } else {
      // TODO: we should do an optimistic delete that doesnt require refetching the entire storage
      chrome.storage.local.remove(key, () => {
        // Pass any observed errors down the promise chain.
        if (chrome.runtime.lastError) {
          console.log('chrome.runtime.lastError:', chrome.runtime.lastError);
          return reject(chrome.runtime.lastError);
        }

        resolve();
      });
    }
  });
}
