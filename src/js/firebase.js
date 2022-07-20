import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBYCWiK3v8PsjKGtzrKyj6c2dz-W2G-3FI',
  authDomain: 'filmoteka-auth-61cc6.firebaseapp.com',
  projectId: 'filmoteka-auth-61cc6',
  storageBucket: 'filmoteka-auth-61cc6.appspot.com',
  messagingSenderId: '290852447649',
  appId: '1:290852447649:web:c47ebe13c5d84ca64757e0',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
