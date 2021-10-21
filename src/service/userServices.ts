import firebase from 'firebase';
import { auth, db } from '../utils/firebase'

//Firebase Auth using token given by OAuth 2
export const loginFirebaseUser = (token: { id_token: string, access_token: string}) => {
  const credential = firebase.auth.GoogleAuthProvider.credential(token.id_token, token.access_token)
  return auth.signInWithCredential(credential)
}

//Send a request to add user details to firebase
export const createNewUser = (userDetails: { name: string, email: string, uid: string, iconUrl: string }) => {
  return db.collection('users').doc(userDetails.email).set({
    name: userDetails.name,
    userId: userDetails.uid,
    createdOn: new Date()
  })
}

//Firebase Auth Logout
export const signOutFirebaseUser = () => {
  return window.gapi.auth2.getAuthInstance().signOut()
    .then(() => { return auth.signOut() })
}
