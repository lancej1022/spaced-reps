import { createSignal, onCleanup, onMount, Show } from 'solid-js';
import { title, unformattedTitle, setCurrentView } from '~/App';
import helpers from '~/helpers';
import type { ReminderInterface } from '../QuestionCard/QuestionCard';
import { createMutation, createQuery, useQueryClient } from '@tanstack/solid-query';
import { getAllStorageLocalData, updateExistingReminder } from '~/promises/chromeStorage';
import { createSaveableReminder } from './generateReminderFunc';

export const [reminderToSearchFor, setReminderToSearchFor] = createSignal('');
export const [currentReminder, setCurrentReminder] = createSignal<ReminderInterface | undefined>();

export default function SaveReminderForm() {
  let categoriesSelectRef: HTMLSelectElement | undefined = undefined;
  const queryClient = useQueryClient();
  const query = createQuery(() => ['reminders'], getAllStorageLocalData);

  const saveReminderMutation = createMutation(
    (
      formEvent: Event & {
        submitter: HTMLElement;
      } & {
        currentTarget: HTMLFormElement;
        target: Element;
      }
    ) => {
      formEvent.preventDefault(); // avoid page reload
      const { key, userResponse } = createSaveableReminder(formEvent, categoriesSelectRef?.options);
      return updateExistingReminder(key, userResponse);
    },
    {
      onMutate: async (
        formEvent: Event & {
          submitter: HTMLElement;
        } & {
          currentTarget: HTMLFormElement;
          target: Element;
        }
      ) => {
        formEvent.preventDefault(); // avoid page reload
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(['reminders']);

        // Snapshot the previous value
        const previousReminders: [string, ReminderInterface][] | undefined =
          queryClient.getQueryData(['reminders']);

        const { key, userResponse } = createSaveableReminder(
          formEvent,
          categoriesSelectRef?.options
        );

        const updatedReminders = previousReminders?.filter((reminder) => {
          return reminder[1].name !== key && reminder[0] !== 'key';
        });

        updatedReminders?.push([key, userResponse]);
        // Optimistically update to the new value
        queryClient.setQueryData(['reminders'], (_oldReminders) => updatedReminders);
        // Return a context object with the snapshotted value
        return { previousReminders };
      },
      // If the mutation fails, use the context returned from onMutate to roll back
      onError: (err, _formEvent, context) => {
        console.error('error during mutation', err);
        queryClient.setQueryData(['reminders'], context?.previousReminders);
      },
      // // Always refetch after error or success:
      onSuccess: () => {
        setCurrentView('questionList');
        // queryClient.invalidateQueries(['reminders'])
      },
    }
  );

  function findCurrentReminder() {
    let queryData = query.data ?? [];

    for (let i = 0; i < queryData.length; i++) {
      let reminderTitle = queryData[i]?.[0];
      if (reminderToSearchFor()) {
        if (queryData[i]?.[1].name === reminderToSearchFor()) {
          return queryData[i]?.[1];
        }
      } else if (
        reminderTitle === title() ||
        // TODO: do we need the `unformattedTitle` check? seems specific to LC, and might not be necessary
        reminderTitle === unformattedTitle()
      ) {
        return queryData[i]?.[1];
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
      <h1 class="text-lg">Reminder for {currentReminder() ? currentReminder()?.name : title()}</h1>
      <form class="min-h-[90%] w-full" onSubmit={saveReminderMutation.mutate}>
        <Show when={!!currentReminder()?.daysBeforeReminder}>
          <p>
            {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- currentReminder is guaranteed to be truthy because of the `Show` component */}
            Previous reminder was set for {currentReminder()!.daysBeforeReminder}{' '}
            {Number(currentReminder()?.daysBeforeReminder) > 1 ? 'days' : 'day'}
          </p>
        </Show>
        <div class="flex gap-10 mt-4 mb-4">
          <label for="days-before-reminder" id="days-before-reminder-label">
            {/* TODO: insert asterisk pseudoelement for proper a11y, and make it reddish */}
            Number of days until next attempt
          </label>
          <input
            class="text-center rounded-sm w-auto text-black"
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
        <div class="flex flex-col mt-4 mb-5">
          <label for="categories" id="categories-label">
            Categorize this problem
          </label>
          <select
            class="rounded-md text-black"
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
        <div class="flex flex-col mt-4 mb-5">
          <label for="notes" id="notes-label">
            Save any notes about this algo
          </label>

          <textarea
            class="w-full rounded-md min-h-[150px] text-black"
            name="notes"
            id="notes"
            placeholder="Relies on two pointer solution and also ... runs in O(n) time and consumes O(k) space ..."
            value={currentReminder()?.notes ?? ''}
          />
        </div>
        <div class="flex gap-3">
          <button class="w-1/2 rounded-md cursor-pointer text-white bg-sky-600" type="submit">
            Save
          </button>

          <a
            class="bg-white rounded-md w-1/2 no-underline text-center text-black p-2 text-"
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
