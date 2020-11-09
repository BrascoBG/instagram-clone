import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8zlIFSeeHVl1i1787QfOStBo0dfHF4rs",
  authDomain: "instagram-clone-2d067.firebaseapp.com",
  databaseURL: "https://instagram-clone-2d067.firebaseio.com",
  projectId: "instagram-clone-2d067",
  storageBucket: "instagram-clone-2d067.appspot.com",
  messagingSenderId: "34300647825",
  appId: "1:34300647825:web:abaaeea12db10308146230",
  measurementId: "G-BX5P5F7MN8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage, firebaseApp };
