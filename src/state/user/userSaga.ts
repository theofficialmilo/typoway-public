import { call, put } from 'redux-saga/effects'

import { loginFirebaseUser, signOutFirebaseUser, createNewUser } from '../../service/userServices'

import { setUserAction, clearUserAction } from './userDucks'
import { setIsLoadingAction, setAlertAction } from '../app/appDucks'
import { clearListAction } from '../library/libraryDucks';
import { clearMessagesAction } from '../sendbox/sendboxDucks';
import { clearMarketplaceDataAction } from '../marketplace/marketplaceDucks';

import { FirebaseAuthUser } from '../../interfaces/User';
import { FUserCredential } from '../../interfaces/TypeHelper';

export function* handleLogin() {
  try {
    yield put(setIsLoadingAction(true));
    const currentUser = window.gapi.auth2.getAuthInstance().currentUser.get();
    const authResponse = currentUser.getAuthResponse(true);

    const firebaseResponse: FUserCredential = yield call(loginFirebaseUser, authResponse)

    // NOTE:
    // Create Promise to handle signup
    
    if(firebaseResponse.user !== null){
      let userDetails: FirebaseAuthUser;
      if(firebaseResponse.user.displayName !== null && firebaseResponse.user.email !== null  && firebaseResponse.user.photoURL !== null){
      userDetails = {
        name: firebaseResponse.user.displayName,
        email: firebaseResponse.user.email,
        uid: firebaseResponse.user.uid,
        iconUrl: firebaseResponse.user.photoURL
      }

      //Handles signup if first time user
      if (firebaseResponse.additionalUserInfo && firebaseResponse.additionalUserInfo.isNewUser) {
        yield call(createNewUser, userDetails);
      }
      const user = {
        name: userDetails.name,
        email: userDetails.email,
        iconUrl: userDetails.iconUrl
      }
      yield put(setUserAction(user))
    }
    }
    yield put(setIsLoadingAction(false));
    // NOTE:
    //yield login successful 

  } catch (error: any) {
    yield put(setAlertAction({ type: 'error', message: JSON.parse(error.message).error.message }))
  }
}

export function* handleLogout() {
  try {
    yield call(signOutFirebaseUser)
    yield put(clearListAction())
    yield put(clearMessagesAction())
    yield put(clearMarketplaceDataAction())
    yield put(clearUserAction())
    yield put(setAlertAction({ type: 'info', message: 'You have been logged out!'}))
  } catch (error) {
    console.log(error)
    yield put(setAlertAction({ type: 'error', message: 'Something went wrong. Please try again later' }))
  }
}