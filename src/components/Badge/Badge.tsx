import { JSX } from 'solid-js';

import * as styles from './Badge.css';

interface IBadgeProps {
  lcDifficultyLevel: 'easy' | 'medium' | 'hard';
  children: JSX.Element;
  class?: string;
}

export default function Badge(props: IBadgeProps) {
  return (
    <span class={`${styles.badge} ${styles[props.lcDifficultyLevel]} ${props.class}`}>
      {props.children}
    </span>
  );
}
