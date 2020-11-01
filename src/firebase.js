import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAYiutDqlm9BaF5_wXH-wAuiYyBQbmlCfo",
  authDomain: "store-clone-1c32d.firebaseapp.com",
  databaseURL: "https://store-clone-1c32d.firebaseio.com",
  projectId: "store-clone-1c32d",
  storageBucket: "store-clone-1c32d.appspot.com",
  messagingSenderId: "197672660162",
  appId: "1:197672660162:web:b47c957bcacaa9caf05f5b",
  measurementId: "G-4C7DR2YMF8",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
