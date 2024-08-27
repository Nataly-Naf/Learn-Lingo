import { db } from './firebase';
import {
  ref,
  get,
  query,
  orderByChild,
  limitToFirst,
  startAt,
} from 'firebase/database';

const pageSize = 4;

const fetchData = async startId => {
  let dataQuery;

  if (startId) {
    console.log(startId);
    dataQuery = query(
      ref(db, '/'),
      orderByChild('id'),
      startAt(startId),
      limitToFirst(pageSize + 1)
    );
  } else {
    dataQuery = query(ref(db, '/'), orderByChild('id'), limitToFirst(pageSize));
  }

  try {
    const snapshot = await get(dataQuery);
    if (snapshot.exists()) {
      const data = snapshot.val();
      const dataArray = Object.values(data);
      console.log(data);

      const keys = Object.keys(data);
      console.log(keys);

      if (keys.length >= pageSize) {
        const lastKey = keys[keys.length - 1];
        console.log(lastKey);
        const lastItemId = data[lastKey].id;
        console.log(lastItemId);

        return { data: dataArray, lastKey: lastItemId };
      } else {
        return { data: dataArray, lastKey: null };
      }
    } else {
      console.log('No data available');
      return { data: [], lastKey: null };
    }
  } catch (error) {
    console.error('Error fetching data: ', error);
    return { data: [], lastKey: null };
  }
};

export default fetchData;
