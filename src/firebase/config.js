// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCAz2pRKXiV89T3RnEKTAYKNts9wSnYrKU',
  authDomain: 'mvp-myweb.firebaseapp.com',
  projectId: 'mvp-myweb',
  storageBucket: 'mvp-myweb.appspot.com',
  messagingSenderId: '37806879215',
  appId: '1:37806879215:web:b7ed975775da8deeac861a',
  measurementId: 'G-Z2XD13QY10',
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
