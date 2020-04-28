import firebase from "firebase/app";
import "firebase/database"
import firebaseconfig from './firebaseconfig'
export const db = firebase.initializeApp(firebaseconfig).database();
export const productRef = db.ref('products');
