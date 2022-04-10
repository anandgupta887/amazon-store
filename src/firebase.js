import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAGj66iUA0LVWeGgE1VDMW9Z4Q7fgesaug",
  authDomain: "indecoders.firebaseapp.com",
  projectId: "amazon-indecoders",
  storageBucket: "amazon-indecoders.appspot.com",
  messagingSenderId: "504761820526",
  appId: "1:504761820526:web:56acc9085d871a769c0d7f",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
