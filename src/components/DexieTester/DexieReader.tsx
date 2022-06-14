import { liveQuery } from 'dexie';
import { createSignal, For, Show } from 'solid-js';
import { db, Friend } from '~/database/db';

export interface IDexieReaderProps {
  minAge?: number;
  maxAge?: number;
}
export default function DexieReader(props: IDexieReaderProps) {
  let [friends, setFriends] = createSignal<Friend[]>([]);
  // Query parameters:
  props.minAge = props.minAge ?? 18;
  props.maxAge = props.maxAge ?? 65;

  liveQuery(async () => {
    let results = await db.friends.where('age').between(props.minAge, props.maxAge).toArray();
    setFriends(results);
    console.log('results', results);
  });

  return (
    <ul>
      <Show when={friends()?.length > 0} fallback={<div>no results from dexie</div>}>
        <For each={friends()} fallback={<div>something was borked within For component</div>}>
          {(friend) => (
            <li>
              {friend.name}, {friend.age}
            </li>
          )}
        </For>
      </Show>
    </ul>
  );
}
