import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA3RYidyV-0BIiXg-ba8P1XQVtVtxgjohs",
    authDomain: "usa-president-election-app.firebaseapp.com",
    databaseURL: "https://usa-president-election-app.firebaseio.com",
    projectId: "usa-president-election-app",
    storageBucket: "usa-president-election-app.appspot.com",
    messagingSenderId: "425819577141",
    appId: "1:425819577141:web:567e7c8c047d80fc32ca7c",
    measurementId: "G-0HBR2ZFFDD"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;