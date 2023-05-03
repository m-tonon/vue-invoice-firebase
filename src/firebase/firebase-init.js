// import { firebase } from 'firebase/compat/app'
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXfDRSQt5AhRfFouQbHpwWLvAWCHwzSjk",
  authDomain: "invoice-app-4390c.firebaseapp.com",
  projectId: "invoice-app-4390c",
  storageBucket: "invoice-app-4390c.appspot.com",
  messagingSenderId: "721759681686",
  appId: "1:721759681686:web:49dcf727028424b3c316b7"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db;