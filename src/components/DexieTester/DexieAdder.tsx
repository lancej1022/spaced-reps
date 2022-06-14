import { createSignal } from 'solid-js';
import { db } from '~/database/db';

export const defaultAge = 21;

let status = '';

let [friendName, setFriendName] = createSignal('');
let [friendAge, setFriendAge] = createSignal(defaultAge);

async function addFriend() {
  try {
    // Add the new friend!
    const id = await db.friends.add({
      name: friendName(),
      age: friendAge(),
    });

    status = `Friend ${friendName} successfully added. Got id ${id}`;

    // Reset form:
    setFriendName('');
    setFriendAge(defaultAge);
  } catch (error) {
    status = `Failed to add ${friendName}: ${error}`;
  }
}

export default function DexieAdder() {
  return (
    <div>
      <p>{status}</p>
      <fieldset>
        <legend>Add new friend</legend>
        <label>
          Name:
          <input
            type="text"
            onInput={(e) => setFriendName(e.currentTarget.value ?? '')}
            value={friendName()}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            onInput={(e) => setFriendAge(Number(e.currentTarget.value) ?? defaultAge)}
            value={friendAge()}
          />
        </label>
        <br />
        <button onClick={addFriend}>Add Friend</button>
      </fieldset>
    </div>
  );
}
