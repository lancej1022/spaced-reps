import { createSignal, For } from 'solid-js';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import { CalendarDay, CalendarDayProps } from './CalendarDay';

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
// const TODAY = dayjs().format('YYYY-MM-DD');
const INITIAL_YEAR = dayjs().format('YYYY');
const INITIAL_MONTH = dayjs().format('M');

let selectedMonth = dayjs(new Date(Number(INITIAL_YEAR), Number(INITIAL_MONTH) - 1, 1));
let currentMonthDays = createDaysForCurrentMonth(INITIAL_YEAR, INITIAL_MONTH);
let previousMonthDays = createDaysForPreviousMonth(INITIAL_YEAR, INITIAL_MONTH);
let nextMonthDays = createDaysForNextMonth(INITIAL_YEAR, INITIAL_MONTH);

function getNumberOfDaysInMonth(year = INITIAL_YEAR, month = INITIAL_MONTH) {
  return dayjs(`${year}-${month}-01`).daysInMonth();
}

function getWeekday(date: string) {
  return dayjs(date).weekday();
}

function createDaysForCurrentMonth(year: string, month: string) {
  return [...Array(getNumberOfDaysInMonth(year, month))].map((_day, index) => {
    return {
      date: dayjs(`${year}-${month}-${index + 1}`).format('YYYY-MM-DD'),
      dayOfMonth: index + 1,
      isCurrentMonth: true,
    };
  });
}

function createDaysForNextMonth(year: string, month: string) {
  const lastDayOfTheMonthWeekday = getWeekday(`${year}-${month}-${currentMonthDays.length}`);

  const nextMonth = dayjs(`${year}-${month}-01`).add(1, 'month');

  const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
    ? 7 - lastDayOfTheMonthWeekday
    : lastDayOfTheMonthWeekday;

  return [...Array(visibleNumberOfDaysFromNextMonth)].map((_day, index) => {
    return {
      date: dayjs(`${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`).format('YYYY-MM-DD'),
      dayOfMonth: index + 1,
      isCurrentMonth: false,
    };
  });
}

function createDaysForPreviousMonth(year: string, month: string) {
  const firstDayOfTheMonthWeekday = getWeekday(currentMonthDays[0]?.date ?? '');

  const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, 'month');

  // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
  const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
    ? firstDayOfTheMonthWeekday - 1
    : 6;

  const previousMonthLastMondayDayOfMonth = dayjs(currentMonthDays[0]?.date ?? '')
    .subtract(visibleNumberOfDaysFromPreviousMonth, 'day')
    .date();

  return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((_day, index) => {
    return {
      date: dayjs(
        `${previousMonth.year()}-${previousMonth.month() + 1}-${
          previousMonthLastMondayDayOfMonth + index
        }`
      ).format('YYYY-MM-DD'),
      dayOfMonth: previousMonthLastMondayDayOfMonth + index,
      isCurrentMonth: false,
    };
  });
}

interface DatePickerProps {
  selected?: number;
}

export default function Calendar(props: DatePickerProps) {
  const [year, setYear] = createSignal(INITIAL_YEAR);
  const [month, setMonth] = createSignal(INITIAL_MONTH);
  const [days, setDays] = createSignal<Array<CalendarDayProps>>([]);

  function generateCalendarDays(year = INITIAL_YEAR, month = INITIAL_MONTH) {
    currentMonthDays = createDaysForCurrentMonth(year, month);
    previousMonthDays = createDaysForPreviousMonth(year, month);
    nextMonthDays = createDaysForNextMonth(year, month);

    setDays([...previousMonthDays, ...currentMonthDays, ...nextMonthDays]);
  }

  function handleMonthChange(direction: 'left' | 'right') {
    if (direction === 'left') {
      selectedMonth = dayjs(selectedMonth).subtract(1, 'month');
    } else {
      selectedMonth = dayjs(selectedMonth).add(1, 'month');
    }

    setMonth(selectedMonth.format('M'));
    setYear(selectedMonth.format('YYYY'));
    generateCalendarDays(year(), month());
  }

  generateCalendarDays();

  return (
    <div>
      <div class="">
        <div role="presentation" aria-live="polite" class="flex items-center w-full">
          {/* displays the date */}
          <div class="flex items-center justify-center w-full">
            <div class="text">
              <div id=":re:-grid-label" class="mr-1.5" style="opacity: 1;">
                {dayjs(new Date(Number(year()), Number(month()) - 1)).format('MMMM YYYY')}
              </div>
            </div>
            <button
              aria-hidden={INITIAL_MONTH === dayjs(month()).format('M')}
              aria-label="Previous month"
              class="relative p-1 -mr-2 inline-flex items-center bg-transparent rounded-full  justify-center cursor-pointer"
              disabled={INITIAL_MONTH === dayjs(month()).format('M')}
              type="button"
              title="Previous month"
              onClick={() => {
                handleMonthChange('left');
              }}
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
              aria-label="Next month"
              class="relative p-1 -mr-2 inline-flex items-center bg-transparent rounded-full  justify-center cursor-pointer"
              disabled={INITIAL_MONTH === dayjs(month()).format('M')}
              type="button"
              title="Next month"
              onClick={() => {
                handleMonthChange('right');
              }}
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
          <div role="row" class="w-full grid grid-cols-7">
            <For each={WEEKDAYS}>
              {(day) => {
                return (
                  <span
                    class="w-9 h-10 mr-0.5 flex justify-center items-center"
                    role="columnheader"
                  >
                    {day}
                  </span>
                );
              }}
            </For>

            <For each={days()}>
              {(day, index) => {
                return (
                  <CalendarDay
                    date={day.date}
                    dayOfMonth={day.dayOfMonth}
                    isCurrentMonth={day.isCurrentMonth}
                  />
                );
              }}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
}
