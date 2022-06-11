import {
  title,
  url,
  unformattedTitle,
  loadAllResponses,
  setCurrentView,
  PAGES,
  handleViewChange,
  existingReminders,
} from "~/App";
import { actionButton } from "~/App.css";

import * as styles from "./SaveReminderForm.css";

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

    // TODO: is this truly a desirable user flow?
    // used to avoid creating duplicate entries
    if (Number(formElements.daysBeforeReminder) === 0) {
      return;
    }

    const userResponse = {
      daysBeforeReminder: formElements.daysBeforeReminder,
      name: title(),
      url: url(),
      timeStamp: new Date().toISOString(),
    };
    const key = unformattedTitle();

    chrome.storage.sync.set({ [key]: userResponse }, function () {
      loadAllResponses();
    });

    setCurrentView(PAGES.questionList);
  }

  let currentReminder;
  for (let i = 0; i < existingReminders().length; i++) {
    if (existingReminders()[i]?.[0] === unformattedTitle()) {
      currentReminder = existingReminders()[i]?.[1].daysBeforeReminder;
      break;
    }
  }

  return (
    <>
      <h1 class={styles.heading1}>Reminder for {title}</h1>
      <form onSubmit={saveUserResponse}>
        <div class={styles.inputWrapper}>
          <label for="days-before-reminder" id="days-before-reminder-label">
            Number of days until next attempt.
          </label>
          <input
            class={styles.numberInput}
            required
            name="daysBeforeReminder"
            id="days-before-reminder"
            type="number"
            max={30}
            min={1}
            value={currentReminder ?? "1"}
          />
          <label for="days-before-reminder" id="days-before-reminder-label">
            Save any notes about this algo.
          </label>
          <textarea
            class={styles.numberInput}
            required
            name="daysBeforeReminder"
            id="days-before-reminder"
            placeholder="Relies on two pointer solution and also ..."
            // value={currentReminder ?? "1"}
          />
        </div>
        <div class={styles.btnWrapper}>
          <button class={actionButton} type="submit">
            Set reminder
          </button>
          <a
            class={styles.returnLink}
            href="/questions-list"
            onClick={(event) => handleViewChange(event, PAGES.questionList)}
          >
            Return to questions
          </a>
        </div>
      </form>
    </>
  );
}
