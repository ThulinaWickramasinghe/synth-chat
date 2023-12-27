import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

//Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD_NeiNyAXk5oMT2DL9-lEmAAiTyF24bZA',
  authDomain: 'synth-chat-3cd16.firebaseapp.com',
  projectId: 'synth-chat-3cd16',
  storageBucket: 'synth-chat-3cd16.appspot.com',
  messagingSenderId: '733896687204',
  appId: '1:733896687204:web:c8576e383015f60bdca971',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
