import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCC4C20yJPa9f5--ukGJmv5CxtOgIqEHHo",
  authDomain: "sammi-movie-app-cbb53.firebaseapp.com",
  projectId: "sammi-movie-app-cbb53",
  storageBucket: "sammi-movie-app-cbb53.appspot.com",
  messagingSenderId: "1074128102099",
  appId: "1:1074128102099:web:22c39c4c2baf97f7d4aa26"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };