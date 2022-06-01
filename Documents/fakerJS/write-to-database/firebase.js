import { initializeApp, getApp, getApps } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import {getAuth} from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDdxNyjAF9jDdaSD_DG_UGANP7-VvxM3j0",
    authDomain: "somethingrandom-65ae5.firebaseapp.com",
    projectId: "somethingrandom-65ae5",
    storageBucket: "somethingrandom-65ae5.appspot.com",
    messagingSenderId: "779921856543",
    appId: "1:779921856543:web:86480f51c549ba86131d2a",
    measurementId: "G-47NFRGLF4T"
};

// initialize firebase
// if there are no apps, we initialize one, if there is, we get the first one
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// firestore initialization
const db = getFirestore();

const auth = getAuth();
// const provider = new firebase.auth.GoogleAuthProvider();

// initialize storage
const storage = getStorage();

export { app, db, storage, auth };
