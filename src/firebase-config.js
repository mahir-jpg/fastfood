// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6T80SsvTNFl90iS-0tYRfyQGjEp_0Qa8",
  authDomain: "thejones-68892.firebaseapp.com",
  projectId: "thejones-68892",
  storageBucket: "thejones-68892.appspot.com",
  messagingSenderId: "844375133894",
  appId: "1:844375133894:web:271a2b9ac1e22d4a4a11c7",
  measurementId: "G-M9661C3CFW"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { firebase, db, auth, storage };