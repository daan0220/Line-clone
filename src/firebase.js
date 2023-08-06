import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDOmHY_ywjld_ZFuE_4Irk1KsCCixlvjoU",
  authDomain: "line-clone-4c9d5.firebaseapp.com",
  projectId: "line-clone-4c9d5",
  storageBucket: "line-clone-4c9d5.appspot.com",
  messagingSenderId: "1010771833526",
  appId: "1:1010771833526:web:c7024f28cbcefc6c6b6c17"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };