import helpers from '~/helpers';
import { setCurrentView } from '~/App';
import { setReminderToSearchFor } from '../SaveReminderForm/SaveReminderForm';
import { removeReminder } from '~/promises/chromeStorage';
import { createMutation, useQueryClient } from '@tanstack/solid-query';

export interface ReminderInterface {
  categories?: string[];
  daysBeforeReminder: string;
  name: string;
  notes?: string;
  timeStamp: string;
  url: string;
}

export default function QuestionCard(props: ReminderInterface) {
  const queryClient = useQueryClient();

  const removeReminderMutation = createMutation(
    (
      event: MouseEvent & {
        currentTarget: HTMLButtonElement;
        target: Element;
      }
    ) => {
      event.stopPropagation();
      return removeReminder(props.name);
    },
    {
      onMutate: async (
        event: MouseEvent & {
          currentTarget: HTMLButtonElement;
          target: Element;
        }
      ) => {
        event.stopPropagation();
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries(['reminders']);

        // Snapshot the previous value
        const previousReminders: [string, ReminderInterface][] | undefined =
          queryClient.getQueryData(['reminders']);

        const updatedReminders = previousReminders?.filter((reminder) => {
          return reminder[1].name !== props.name && reminder[0] !== 'key';
        });
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
      onSuccess: () => {
        setCurrentView('questionList');
        // // Always refetch after error or success:
        // queryClient.invalidateQueries(['reminders'])
      },
    }
  );

  return (
    <div class="flex w-full items-center gap-2 text-white py-2">
      <div class="flex justify-center items-center rounded-full w-12 h-12 text-base text-white bg-slate-600">
        {Number(props.daysBeforeReminder) -
          helpers.dateDiffInDays(new Date(props.timeStamp), new Date())}
      </div>
      <div class="grow">
        <h2 class="font-medium text-base text-center">{props.name}</h2>
        <div
          role="group"
          aria-label="button group"
          class="flex justify-between items-center w-full text-base "
        >
          <button
            class="hover:bg-fuchsia-900 w-full border-r-sky-600 border-r-slate-600 border-r-2 font-normal p-2"
            onClick={removeReminderMutation.mutate}
          >
            Remove
          </button>

          <a
            class="hover:bg-fuchsia-900 w-full border-r-sky-600 border-r-slate-600 border-r-2 font-normal p-2 text-center"
            href="/save-reminder"
            onClick={(event) => {
              event.stopPropagation();
              setReminderToSearchFor(props.name);
              setCurrentView('saveReminderForm');
            }}
          >
            Edit
          </a>
          <a
            class="hover:bg-fuchsia-900 w-full font-normal p-2 text-center"
            onClick={(event) => {
              event.stopPropagation();
            }}
            href={props.url}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}
