import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the db');
  const dataDb = await openDB('data', 1);
  const txt = dataDb.transaction('data', 'readwrite');
  const store = txt.objectStore('data');
  const request = store.put({ id: 1, value: content});
  const result = await request;
  console.log('🚀 - data has been updated', result.value);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => 
{
  console.log('get all from the db');

  const dataDb = await openDB('data', 1);
  const txt = dataDb.transaction('data', 'readonly');
  const store = txt.objectStore('data');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  result
  ? console.log('🚀 - data has been got', result.value)
  : console.log('🚀 - data not found');
  return result?.value
};

initdb();
