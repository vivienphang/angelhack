import { initializeApp } from 'firebase/app';
import config from './config';
import * as db from 'firebase/firestore';

const firebase = initializeApp(config.firebaseConfig);
const firestore = db.getFirestore(firebase);

export { db, firestore };