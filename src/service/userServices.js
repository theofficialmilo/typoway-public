import firebase from 'firebase';
import { auth, db } from '../utils/firebase'

//Firebase Auth using token given by OAuth 2
export const loginFirebaseUser = ({ id_token, access_token }) => {
  const credential = firebase.auth.GoogleAuthProvider.credential(id_token, access_token)
  return auth.signInWithCredential(credential)
}

//Send a request to add user details to firebase
export const createNewUser = ({ name, email, uid }) => {
  return db.collection('users').doc(email).set({
    name: name,
    userId: uid,
    createdOn: new Date()
  })
}

//Firebase Auth Logout
export const signOutFirebaseUser = () => {
  return window.gapi.auth2.getAuthInstance().signOut()
    .then(() => { return auth.signOut() })
}
