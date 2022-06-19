import {
  title,
  url,
  unformattedTitle,
  loadAllReminders,
  setCurrentView,
  PAGES,
  existingReminders,
} from '~/App';
import { actionButton } from '../QuestionsList/QuestionsList.css';

import * as styles from './SaveReminderForm.css';

export default function SaveReminderForm() {
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
      daysBeforeReminder: formElements.daysBeforeReminder,
      name: title(),
      url: url(),
      timeStamp: new Date().toISOString(),
    };
    // TODO: this logic is a confusing way to determine whether to go with a leetcode title vs educative. Also hard to expand on, such as adding AlgoExpert
    const key = url().includes('leetcode') ? unformattedTitle() : title();

    chrome.storage.local.set({ [key]: userResponse }, function () {
      loadAllReminders();
    });

    setCurrentView(PAGES.questionList);
  }

  let currentReminder;
  for (let i = 0; i < existingReminders().length; i++) {
    let reminderTitle = existingReminders()[i]?.[0];
    if (reminderTitle === unformattedTitle()) {
      // TODO: update this to render the current days remaining, not the original daysBeforeReminder
      currentReminder = existingReminders()[i]?.[1].daysBeforeReminder;
      break;
    }
  }

  console.log(title());
  return (
    <>
      <h1 class={styles.heading1}>Reminder for {title()}</h1>
      <form class={styles.saveReminderForm} onSubmit={saveUserResponse}>
        <div class={styles.inputWrapper}>
          <label for="days-before-reminder" id="days-before-reminder-label">
            Number of days until next attempt
          </label>
          <input
            class={styles.numberInput}
            required
            name="daysBeforeReminder"
            id="days-before-reminder"
            type="number"
            max={90}
            min={1}
            value={currentReminder || '1'}
          />
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
            // value={currentNotes ?? ""}
          />
        </div>
        <div class={styles.btnWrapper}>
          <button class={actionButton} type="submit">
            Save reminder
          </button>
          <a
            class={styles.returnLink}
            href="/questions-list"
            onClick={(event) => {
              event.preventDefault();
              setCurrentView(PAGES.questionList);
            }}
          >
            Return to questions
          </a>
        </div>
      </form>
    </>
  );
}
