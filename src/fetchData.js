import { db } from './firebase';
import {
  ref,
  get,
  query,
  orderByChild,
  limitToFirst,
  startAt,
  equalTo,
} from 'firebase/database';

const pageSize = 4;

const fetchData = async startId => {
  let dataQuery;

  if (startId) {
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

      const keys = Object.keys(data);

      if (keys.length >= pageSize) {
        const lastKey = keys[keys.length - 1];
        const lastItemId = data[lastKey].id;

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

export const fetchTeacherById = async teacherId => {
  try {
    console.log('Fetching teacher with ID:', teacherId);

    const teacherQuery = query(
      ref(db, '/'),
      orderByChild('id'),
      equalTo(teacherId)
    );

    const snapshot = await get(teacherQuery);

    if (snapshot.exists()) {
      const data = snapshot.val();

      const teacherData = Object.values(data)[0];

      console.log('Teacher data found:', teacherData);
      return teacherData;
    } else {
      console.log(`No data available for teacherId: ${teacherId}`);
      return null;
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
