import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCSsgfeoEPYt1FVt3z0pgFCWE1hYhx1skg",
  authDomain: "alquicancha-d6d01.firebaseapp.com",
  projectId: "alquicancha-d6d01",
  storageBucket: "alquicancha-d6d01.appspot.com",
  messagingSenderId: "1094541898575",
  appId: "1:1094541898575:web:d9289dd62ccbf70d568b3a"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
export default firebaseApp;