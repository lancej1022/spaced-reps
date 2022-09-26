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
import Calendar from './Calendar';
import styles from './DatePicker.css';

interface DatePickerProps {
  selected?: number;
}

export default function DatePicker(props: DatePickerProps) {
  let dialogRef: HTMLDialogElement | undefined = undefined;

  return (
    <div class="wrapper">
      <div class="text-wrapper">
        <label for="days-before-reminder" id="days-before-reminder-label">
          Number of days until next attempt
        </label>
        <div class="flex items-center pl-3 py-1 border-2 border-solid border-white rounded">
          <input
            class="bg-transparent text-white"
            required
            name="daysBeforeReminder"
            id="days-before-reminder"
            type="text"
            max={90}
            min={0}
            value="10"
            // value={
            //   currentReminder()?.timeStamp
            //     ? Number(currentReminder()?.daysBeforeReminder) -
            //       helpers.dateDiffInDays(new Date(currentReminder()?.timeStamp ?? ''), new Date())
            //     : '1'
            // }
          />
          <button
            onClick={() => dialogRef?.showModal()}
            // aria-label={`Choose date, selected date is ${date}`}
            class="relative p-2 -mr-2 inline-flex items-center bg-transparent rounded-full	justify-center cursor-pointer text-white"
            type="button"
          >
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium w-6 h-6 fill-current"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CalendarIcon"
            >
              <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path>
            </svg>
          </button>
        </div>
      </div>

      <dialog class={`bg-slate-800 text-white w-80 pt-1 ${styles.dialogBackdrop}`} ref={dialogRef}>
        <form method="dialog">
          <div class="flex justify-end">
            <button
              aria-label="Close date picker"
              title="Close date picker"
              class="p-1 -mr-2 inline-flex items-center bg-transparent rounded-full justify-center cursor-pointer"
              value="cancel"
            >
              <svg
                class="w-5 h-5 fill-current"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="CloseIcon"
                tabindex="-1"
              >
                <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </button>
          </div>
          <Calendar />
        </form>
      </dialog>
    </div>
  );
}
