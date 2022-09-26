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
      itemsArr = mocks.questionMocks;

      helpers.sortByDaysRemainingBeforeReminder(itemsArr);

      resolve(itemsArr);
    } else {
      // Asynchronously fetch all data from storage.sync.
      chrome.storage.local.get(null, (items) => {
        // Pass any observed errors down the promise chain.
        if (chrome.runtime.lastError) {
          return reject(chrome.runtime.lastError);
        }

        helpers.testSize(items);
        console.log('saved reminders', Object.entries(items));
        const itemsArr: [string, ReminderInterface][] = Object.entries(items);
        helpers.sortByDaysRemainingBeforeReminder(itemsArr);

        // Pass the data retrieved from storage down the promise chain.
        resolve(itemsArr);
      });
    }
  });
}
