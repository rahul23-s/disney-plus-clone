import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAYbvb-UAFzxbAl0RuR3c4YzV92x8NmHRI",
  authDomain: "disneyplus-clone-e429d.firebaseapp.com",
  projectId: "disneyplus-clone-e429d",
  storageBucket: "disneyplus-clone-e429d.appspot.com",
  messagingSenderId: "850149761201",
  appId: "1:850149761201:web:b30fbe8636b94d0cef8290",
  measurementId: "G-M5K2R3QNJE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //To initialise a firebase app
const db = firebaseApp.firestore(); //for database
const auth = firebase.auth(); //authentication
const provider = new firebase.auth.GoogleAuthProvider(); //To add social login of google
const storage = firebase.storage(); // To store images, videos, etc for the site

export { auth, provider, storage };
export default db;
