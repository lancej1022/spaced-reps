import Dexie, { Table } from 'dexie';

export interface Friend {
  id?: number;
  name: string;
  age: number;
}

/*
  When using TS, table properties (such as db.friends) needs to be explicitely declared on a subclass of Dexie 
  just to help out with the typings for your db instance, its tables and entity models.
*/
export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  friends!: Table<Friend>;

  constructor() {
    super('myDatabase');
    // DB with single table "friends" with primary key "id" and
    // indexes on properties "name" and "age"
    this.version(1).stores({
      friends: '++id, name, age', // Primary key and indexed props
    });
  }
}

/*
 Applications typically have one single Dexie instance declared as its own module. This is where you declare which tables you need and how each table shall be indexed. A Dexie instance is a singleton throughout the application - you do not need to create it on demand. Export the resulting db instance from your module so that components or other modules can use it to query or write to the database.
 */
export const db = new MySubClassedDexie();

db.friends
  .bulkPut([
    { id: 1, name: 'Josephine', age: 21 },
    { id: 2, name: 'Per', age: 75 },
    { id: 3, name: 'Simon', age: 5 },
    { id: 4, name: 'Sara', age: 50 },
  ])
  .then(() => {
    return db.friends.where('age').between(0, 25).toArray();
  })
  .then((friends) => {
    alert('Found young friends: ' + friends.map((friend) => friend.name));

    return db.friends.orderBy('age').reverse().toArray();
  })
  .then((friends) => {
    alert(
      'Friends in reverse age order: ' + friends.map((friend) => `${friend.name} ${friend.age}`)
    );

    return db.friends.where('name').startsWith('S').keys();
  })
  .catch((err) => {
    alert('Ouch... ' + err);
  });
