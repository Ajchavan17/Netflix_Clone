import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFCN3eCUE0A24E-oCgbQSclHFF3PPiM5g",
    authDomain: "netflix-10.firebaseapp.com",
    projectId: "netflix-10",
    storageBucket: "netflix-10.appspot.com",
    messagingSenderId: "820041819483",
    appId: "1:820041819483:web:35c76a1948a10466d8a67e",
    measurementId: "G-9MJK96BL3T"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }
  export default db;