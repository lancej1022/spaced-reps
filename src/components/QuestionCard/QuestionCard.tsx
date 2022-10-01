import styles from './QuestionCard.css';
import helpers from '~/helpers';
import { loadAllReminders, setCurrentView, isLocal, setFilteredReminders } from '~/App';
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

  const saveReminderMutation = createMutation(
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
          // return reminder[1].name !== props.name && reminder[0] !== 'key';
        });
        // Optimistically update to the new value
        queryClient.setQueryData(['reminders'], (_oldReminders) => updatedReminders);
        setFilteredReminders(updatedReminders ?? []);
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

  return (
    <div class={styles.questionCardWrapper}>
      <div class={`${styles.daysRemainingBubble} text-white bg-slate-600`}>
        {Number(props.daysBeforeReminder) -
          helpers.dateDiffInDays(new Date(props.timeStamp), new Date())}
      </div>
      <h2 class={styles.questionName}>{props.name}</h2>
      <div role="group" aria-label="button group" class={styles.buttonGroup}>
        <button class={styles.questionButton} onClick={saveReminderMutation.mutate}>
          Remove
        </button>

        <a
          class={styles.questionButton}
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
          class={styles.questionButton}
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
  );
}
