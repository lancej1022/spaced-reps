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

interface DatePickerProps {
  selected?: number;
}

export default function Calendar(props: DatePickerProps) {
  return (
    <div>
      <div class="">
        <div role="presentation" aria-live="polite" class="flex items-center w-full">
          {/* displays the date */}
          <div class="flex items-center mr-auto">
            <div class="text css-1bx5ylf">
              <div id=":re:-grid-label" class="mr-1.5" style="opacity: 1;">
                August 2014
              </div>
            </div>
            {/* displays the dropdown arrow to launch the Year Picker*/}
            <button
              class="relative p-1 -mr-2 inline-flex items-center bg-transparent rounded-full  justify-center cursor-pointer"
              type="button"
              aria-label="calendar view is open, switch to year view"
            >
              <svg
                class="w-6 h-6 fill-current"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ArrowDropDownIcon"
              >
                <path d="M7 10l5 5 5-5z"></path>
              </svg>
              <span class="MuiTouchRipple-root css-w0pj6f"></span>
            </button>
          </div>
          {/* Displays left + right navigation arrows */}
          <div class="flex items-center">
            <button
              class="relative p-1 -mr-2 inline-flex items-center bg-transparent rounded-full  justify-center cursor-pointer"
              type="button"
              aria-label="Previous month"
              title="Previous month"
            >
              <svg
                class="w-6 h-6 fill-current"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ArrowLeftIcon"
              >
                <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
              </svg>
              <span class="MuiTouchRipple-root css-w0pj6f"></span>
            </button>
            <div class="w-6"></div>
            <button
              class="relative p-1 -mr-2 inline-flex items-center bg-transparent rounded-full  justify-center cursor-pointer"
              type="button"
              aria-label="Next month"
              title="Next month"
            >
              <svg
                class="w-6 h-6 fill-current"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="ArrowRightIcon"
              >
                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
              </svg>
              <span class="MuiTouchRipple-root css-w0pj6f"></span>
            </button>
          </div>
        </div>
        {/* rows of days */}
        <div class="flex justify-center items-center">
          <div role="row" class="flex">
            <span
              class="w-9 h-10 mr-0.5 flex justify-center items-center"
              role="columnheader"
              aria-label="Sunday"
            >
              S
            </span>
            <span
              class="w-9 h-10 mr-0.5 flex justify-center items-center"
              role="columnheader"
              aria-label="Monday"
            >
              M
            </span>
            <span
              class="w-9 h-10 mr-0.5 flex justify-center items-center"
              role="columnheader"
              aria-label="Tuesday"
            >
              T
            </span>
            <span
              class="w-9 h-10 mr-0.5 flex justify-center items-center"
              role="columnheader"
              aria-label="Wednesday"
            >
              W
            </span>
            <span
              class="w-9 h-10 mr-0.5 flex justify-center items-center"
              role="columnheader"
              aria-label="Thursday"
            >
              T
            </span>
            <span
              class="w-9 h-10 mr-0.5 flex justify-center items-center"
              role="columnheader"
              aria-label="Friday"
            >
              F
            </span>
            <span
              class="w-9 h-10 mr-0.5 flex justify-center items-center"
              role="columnheader"
              aria-label="Saturday"
            >
              S
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
