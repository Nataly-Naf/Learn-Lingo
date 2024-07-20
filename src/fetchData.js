// src/fetchData.js
import { db } from './firebase';
import { ref, get } from 'firebase/database';

const fetchData = async () => {
  const dataRef = ref(db, '/'); // Укажите путь к вашим данным в базе данных
  try {
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      console.log(snapshot.val());
      return snapshot.val();
    } else {
      console.log('No data available');
      return null;
    }
  } catch (error) {
    console.error('Error fetching data: ', error);
    return null;
  }
};

export default fetchData;
