import Dexie, { Table } from 'dexie';

export interface Friend {
  id?: number;
  name: string;
  age: number;
}

/*
  table properties (such as db.friends) needs to be explicitely declared on a subclass of Dexie 
  just to help out with the typings for your db instance, its tables and entity models.
*/
export class MySubClassedDexie extends Dexie {
  // 'friends' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  friends!: Table<Friend>;

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      friends: '++id, name, age', // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();
