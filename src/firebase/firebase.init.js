import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXfDRSQt5AhRfFouQbHpwWLvAWCHwzSjk",
  authDomain: "invoice-app-4390c.firebaseapp.com",
  projectId: "invoice-app-4390c",
  storageBucket: "invoice-app-4390c.appspot.com",
  messagingSenderId: "721759681686",
  appId: "1:721759681686:web:49dcf727028424b3c316b7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();