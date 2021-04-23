import firebase from 'firebase'
import "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAEABz9NwXxpRQ4ZCuL-QeR9dzXY-qf2hw",
    authDomain: "todo-d0921.firebaseapp.com",
    projectId: "todo-d0921",
    storageBucket: "todo-d0921.appspot.com",
    messagingSenderId: "953692151642",
    appId: "1:953692151642:web:a2ce5c088ab0cf9e321d63",
    measurementId: "G-WM7HLH6X1V"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  export default db;