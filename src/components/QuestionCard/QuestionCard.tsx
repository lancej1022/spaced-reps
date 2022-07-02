import styles from './QuestionCard.css';
import helpers from '~/helpers';
import { loadAllReminders, setCurrentView } from '~/App';
import { setReminderToSearchFor } from '../SaveReminderForm/SaveReminderForm';

export interface ReminderInterface {
  categories?: string[];
  daysBeforeReminder: string;
  name: string;
  notes?: string;
  timeStamp: string;
  url: string;
}

export default function QuestionCard(props: ReminderInterface) {
  function handleDeleteClick(
    event: MouseEvent & {
      currentTarget: HTMLButtonElement;
      target: Element;
    }
  ) {
    event.stopPropagation();
    if (import.meta.env.MODE === 'development') {
      loadAllReminders(props.name);
    } else {
      chrome.storage.local.remove(props.name, () => {
        // TODO: we should do an optimistic delete that doesnt require refetching the entire storage
        loadAllReminders();
      });
    }
  }

  return (
    <div class={styles.questionCardWrapper}>
      <div class={styles.daysRemainingBubble}>
        {Number(props.daysBeforeReminder) -
          helpers.dateDiffInDays(new Date(props.timeStamp), new Date())}
      </div>
      <h2 class={styles.questionName}>{props.name}</h2>
      <div role="group" aria-label="button group" class={styles.buttonGroup}>
        <button class={styles.questionButton} onClick={handleDeleteClick}>
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
