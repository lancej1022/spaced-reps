import { createSignal, For } from 'solid-js';
import { filteredReminders, setCurrentView } from '~/App';
import QuestionCard from '../QuestionCard';
import SearchField from '../SearchField';

import * as styles from './QuestionsList.css';

export default function QuestionsList() {
  const [isHovered, setIsHovered] = createSignal(false);
  return (
    <>
      <SearchField />
      <section
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        class={`${styles.questionsContainer} ${isHovered() && styles.questionsContainerHovered}`}
      >
        <For each={filteredReminders()}>
          {(item) => {
            return <QuestionCard {...item[1]} />;
          }}
        </For>
      </section>
      <a
        class={`${styles.actionButton} ${styles.anchorBtn}`}
        href="/save-reminder"
        onClick={(event) => {
          event.preventDefault();
          setCurrentView('saveReminderForm');
        }}
      >
        Save Reminder
      </a>
    </>
  );
}
