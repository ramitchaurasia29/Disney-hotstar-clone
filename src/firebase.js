import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBrKxCPWN6YNVgmFhVGKaq567Y76igEuF0",
    authDomain: "disneyplus-clone-bbe84.firebaseapp.com",
    projectId: "disneyplus-clone-bbe84",
    storageBucket: "disneyplus-clone-bbe84.appspot.com",
    messagingSenderId: "437722791423",
    appId: "1:437722791423:web:7c971fff1462d9f9a1bbca",
    measurementId: "G-KHH104TTJH"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage,firebase };
export default db;

