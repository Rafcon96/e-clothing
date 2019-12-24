import firebase from 'firebase/app';
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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`); 

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
          console.log('error creating user', error.message);
      }
       
    }
    return userRef;
  };
 
  

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;