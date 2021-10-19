import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"

import {firebaseConfig} from './config'

//For initalizing Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth()
export const db = app.firestore()

export default app