import firebase from "firebase";
import "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_N_jY3nuJKmTPBIpRqcLma-Z6fDzub6w",
    authDomain: "myapp-80604.firebaseapp.com",
    projectId: "myapp-80604",
    storageBucket: "myapp-80604.appspot.com",
    messagingSenderId: "528034708919",
    appId: "1:528034708919:web:6954e389b510759b563c32",
    measurementId: "G-4VMPL8XY24"
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
