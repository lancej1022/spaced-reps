import { createQuery } from '@tanstack/solid-query';
import { createSignal, For, Show } from 'solid-js';
import { setCurrentView } from '~/App';
import { getAllStorageLocalData } from '~/promises/chromeStorage';
import QuestionCard from '../QuestionCard/QuestionCard';
import SearchField, { searchText } from '../SearchField/SearchField';

import styles from './QuestionsList.css';

export default function QuestionsList() {
  const [isHovered, setIsHovered] = createSignal(false);
  const query = createQuery(() => ['reminders'], getAllStorageLocalData);
  return (
    <>
      <SearchField />
      <section
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        class={`${styles.questionsContainer} ${isHovered() && styles.questionsContainerHovered}`}
      >
        <For each={query.data}>
          {(reminder) => (
            <Show when={reminder[1].name.toLowerCase().includes(searchText().toLowerCase())}>
              <QuestionCard {...reminder[1]} />
            </Show>
          )}
        </For>
      </section>
      <a
        class={`${styles.actionButton} ${styles.anchorBtn} bg-sky-600`}
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
