import Badge from '../Badge';
import * as styles from './QuestionCard.css';
import * as rootStyles from '~/styles/index.css';

const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'narrow' });

export interface IQuestionCardProps {
  questionName: string;
  lastAttempted: Date; // will be '3 day
  // color in the last atetempted if its past the next practice day
  lcDifficultyLevel: 'easy' | 'medium' | 'hard';
  userDefinedDifficulty: number; // TODO: make this only accept 1-10
  timesSolved: number;
  timesAttempted: number;
  url: string;
}

// TODO: this should be user definable
const difficultyToDays = {
  1: '2 day',
  2: '4 day',
  3: '6 day',
  4: '8 day',
  5: '10 day',
};

// middle screen https://dribbble.com/shots/18181992-Streak
export default function QuestionCard(props: IQuestionCardProps) {
  let leetCodeLink: HTMLAnchorElement | undefined = undefined;

  function handleCardClick() {
    leetCodeLink?.click();
  }

  // const daysRemaining = (props.userDefinedDifficulty * 2) - ;
  // - props.lastAttempted  - )+ rtf1.format(-2, 'days');

  return (
    // TODO: should this whole `div` be replaed with a `Link`? what is the accessible way to approach this
    <div class={styles.questionCardWrapper} onClick={handleCardClick}>
      {/* /bubble on left displays number of  days until next due */}
      {/* <div class="bubble-left">days remaining will go here!</div> */}
      <div class={styles.daysRemainingBubble}>3</div>
      <p class={styles.questionName}>{props.questionName}</p>
      <Badge
        class={styles.leetCodeDifficulty}
        lcDifficultyLevel={props.lcDifficultyLevel}
      >
        {props.lcDifficultyLevel}
      </Badge>
      {/* serves as the right hand arrow */}
      <a
        class={styles.arrow}
        href={props.url}
        target="_blank"
        referrerPolicy="no-referrer"
        ref={leetCodeLink}
      >
        <span class={rootStyles.visuallyHidden}>leetcode link</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#fff"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
          // TODO: improve the a11y of this link stuff. Ideally, the card itself functions as a link
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
