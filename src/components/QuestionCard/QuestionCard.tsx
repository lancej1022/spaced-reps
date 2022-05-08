import * as styles from './QuestionCard.css';

const rtf1 = new Intl.RelativeTimeFormat('en', { style: 'narrow' });

export interface IQuestionCardProps {
  questionName: string;
  lastAttempted: Date; // will be '3 day
  // color in the last atetempted if its past the next practice day
  lcDifficultyLevel: string; // TODO: make this only accept 1-10
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
  // const daysRemaining = (props.userDefinedDifficulty * 2) - ;
  // - props.lastAttempted  - )+ rtf1.format(-2, 'days');

  return (
    // TODO: should this whole `div` be replaed with a `Link`? what is the accessible way to approach this
    <div class={styles.questionCardWrapper}>
      {/* /bubble on left displays number of  days until next due */}
      <div class="bubble-left">days remaining will go here!</div>
      <p>{props.questionName}</p>
      <p class="difficulty-level">{props.lcDifficultyLevel}</p>
      {/* serves as the right hand arrow */}
      <a class="right-arrow" href={props.url} />
    </div>
  );
}
