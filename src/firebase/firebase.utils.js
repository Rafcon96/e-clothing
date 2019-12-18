import firebase, { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCCvGxxF8nrMWl2ZX5VjbhqMpOTsIg0lcs",
    authDomain: "crown-db-6b658.firebaseapp.com",
    databaseURL: "https://crown-db-6b658.firebaseio.com",
    projectId: "crown-db-6b658",
    storageBucket: "crown-db-6b658.appspot.com",
    messagingSenderId: "534194172941",
    appId: "1:534194172941:web:25385b82ba5375b2855144",
    measurementId: "G-D33HS4MMRH"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;