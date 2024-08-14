// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB2ZFyCYIJ4m31dCOm-GNW1h51WpPfpNSA',
  authDomain: 'learn-lingo-teachers.firebaseapp.com',
  databaseURL:
    'https://learn-lingo-teachers-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'learn-lingo-teachers',
  storageBucket: 'learn-lingo-teachers.appspot.com',
  messagingSenderId: '49948210580',
  appId: '1:49948210580:web:fc507cfc5223b9dfb38b81',
  measurementId: 'G-S2P9GWFRGG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
