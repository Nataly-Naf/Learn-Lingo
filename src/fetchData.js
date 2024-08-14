import { db } from './firebase';
import { ref, get } from 'firebase/database';

const fetchData = async () => {
  const dataRef = ref(db, '/');
  try {
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
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
