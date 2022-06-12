import Badge from '../Badge';
import * as styles from './QuestionCard.css';
import * as rootStyles from '~/styles/index.css';
import { createSignal } from 'solid-js';

const millisecondsPerDay = 1000 * 60 * 60 * 24;

function dateDiffInDays(a: Date, b: Date) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / millisecondsPerDay);
}

export interface IQuestionCardProps {
  name: string;
  daysBeforeReminder: string;
  timeStamp: string;
  url: string;
}

// middle screen https://dribbble.com/shots/18181992-Streak
export default function QuestionCard(props: IQuestionCardProps) {
  const [isHovered, setIsHovered] = createSignal(false);

  let leetCodeLink: HTMLAnchorElement | undefined = undefined;
  function handleCardClick() {
    leetCodeLink?.click();
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
      <p class={styles.questionName}>{props.name}</p>
      <button class={styles.removeReminderBtn} onClick={(e) => e.preventDefault()}>
        Remove reminder
      </button>
      <a
        class={styles.arrow}
        href={props.url}
        // target="_blank"
        referrerPolicy="no-referrer"
        ref={leetCodeLink}
      >
        <span class={rootStyles.visuallyHidden}>{props.url}</span>
        <svg
          class={`bi bi-chevron-right ${isHovered() ? styles.arrowHovered : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#fff"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </a>
    </div>
  );
}
