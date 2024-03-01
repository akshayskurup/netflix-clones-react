import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { collection, addDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4D3KzNLeBTu_pdgSQ7khNaet8lgKZg3Y",
  authDomain: "react-netflix-9ad02.firebaseapp.com",
  projectId: "react-netflix-9ad02",
  storageBucket: "react-netflix-9ad02.appspot.com",
  messagingSenderId: "144588888767",
  appId: "1:144588888767:web:585857daaddeebed0c840a",
  measurementId: "G-S60Y79LNTJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth()
const firestore = firebase.firestore()

export {firebaseApp,auth,firestore,collection,addDoc}

