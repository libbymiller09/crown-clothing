import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDp7sze8SE7IVQM9-Xwv7EBNDniNfgIg5g",
  authDomain: "crown-db-c2e7e.firebaseapp.com",
  databaseURL: "https://crown-db-c2e7e.firebaseio.com",
  projectId: "crown-db-c2e7e",
  storageBucket: "crown-db-c2e7e.appspot.com",
  messagingSenderId: "182139662973",
  appId: "1:182139662973:web:9d78d6a882d93ae7fbb714"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
