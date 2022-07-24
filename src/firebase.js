import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDrMPSsRAXH4VHQAG4VB_9H_NlJOrc83MU",
    authDomain: "facebook-clone-75634.firebaseapp.com",
    projectId: "facebook-clone-75634",
    storageBucket: "facebook-clone-75634.appspot.com",
    messagingSenderId: "1038281693054",
    appId: "1:1038281693054:web:3114db7dd3614f671ac52f"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider};