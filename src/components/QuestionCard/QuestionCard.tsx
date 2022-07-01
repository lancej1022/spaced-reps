import { createSignal } from 'solid-js';
import * as styles from './QuestionCard.css';
import { dateDiffInDays } from '~/helpers';
import { isLocal, loadAllReminders, setCurrentView } from '~/App';
import { setReminderToSearchFor } from '../SaveReminderForm/SaveReminderForm';

import * as rootStyles from '~/styles/index.css';

export interface ReminderInterface {
  categories?: string[];
  daysBeforeReminder: string;
  name: string;
  notes?: string;
  timeStamp: string;
  url: string;
}

// middle screen https://dribbble.com/shots/18181992-Streak
export default function QuestionCard(props: ReminderInterface) {
  const [isHovered, setIsHovered] = createSignal(false);

  let leetCodeLink: HTMLAnchorElement | undefined = undefined;
  function handleCardClick() {
    leetCodeLink?.click();
  }

  function handleDeleteClick(
    event: MouseEvent & {
      currentTarget: HTMLButtonElement;
      target: Element;
    }
  ) {
    event.stopPropagation();
    if (isLocal) {
      loadAllReminders(props.name);
    } else {
      chrome.storage.local.remove(props.name, () => {
        // TODO: we should do an optimistic delete that doesnt require refetching the entire storage
        loadAllReminders();
      });
    }
  }

  return (
    <div
      class={styles.questionCardWrapper}
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div class={styles.daysRemainingBubble}>
        {Number(props.daysBeforeReminder) - dateDiffInDays(new Date(props.timeStamp), new Date())}
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
          ref={leetCodeLink}
        >
          Visit
        </a>
      </div>
    </div>
  );
}
