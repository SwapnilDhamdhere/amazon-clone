import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_ATDKAe1N7GOkkCyev8CFx8XdBndlJcM",
  authDomain: "clone-151ef.firebaseapp.com",
  projectId: "clone-151ef",
  storageBucket: "clone-151ef.appspot.com",
  messagingSenderId: "67278984794",
  appId: "1:67278984794:web:7098a0947fb9702097aa63",
  measurementId: "G-EBJV8JDZG1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
