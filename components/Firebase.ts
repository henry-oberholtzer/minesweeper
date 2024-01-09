import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
const auth = initializeAuth(app, {
  persistence : getReactNativePersistence(AsyncStorage)
})
const db = getFirestore(app);

export { db, auth };
