import { createQuery } from '@tanstack/solid-query';
import { createSignal, For, Show } from 'solid-js';
import { setCurrentView } from '~/App';
import { getAllStorageLocalData } from '~/promises/chromeStorage';
import QuestionCard from '../QuestionCard/QuestionCard';
import SearchField, { searchText } from '../SearchField/SearchField';

import styles from './QuestionsList.css';

export default function QuestionsList() {
  const query = createQuery(() => ['reminders'], getAllStorageLocalData);

  const [isHovered, setIsHovered] = createSignal(false);

  return (
    <>
      <SearchField />
      <section
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        class={`${styles.questionsContainer} ${
          isHovered() && styles.questionsContainerHovered
        } overflow-y-scroll flex-grow w-full max-h-full pl-2`}
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
        class="bg-sky-600 hover:bg-sky-700 text-center w-3/6 mx-auto mt-6 px-4 py-2 cursor-pointer no-underline rounded"
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
