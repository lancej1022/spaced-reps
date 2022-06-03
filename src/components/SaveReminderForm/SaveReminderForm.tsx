import {
  title,
  url,
  unformattedTitle,
  loadAllResponses,
  setCurrentView,
  PAGES,
} from '~/App';

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

  return (
    <>
      <h1>Save reminder for: {title}</h1>
      <form onSubmit={saveUserResponse}>
        <label id="days-before-reminder-label">
          Enter the number of days (up to 100) until you are reminded to reattempt this
          problem. 0 means no reminder.
          <input
            required
            name="daysBeforeReminder"
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
  );
}
