import { call, put } from 'redux-saga/effects'

import { loginFirebaseUser, signOutFirebaseUser, createNewUser } from '../../service/userServices'

import { setUserAction, clearUserAction } from './userDucks'
import { setIsLoadingAction, setAlertAction } from '../app/appDucks'
import { clearListAction } from '../template/templateDucks';
import { clearMessagesAction } from '../message/messageDucks';
import { clearMarketplaceDataAction } from '../marketplace/marketplaceDucks';
import { History } from 'history';
import { FirebaseAuthUser, User } from '../../interfaces/User';

export function* handleLogin() {
  try {
    yield put(setIsLoadingAction(true));
    const currentUser = window.gapi.auth2.getAuthInstance().currentUser.get();
    const authResponse = currentUser.getAuthResponse(true);

    const firebaseResponse: firebase.default.auth.UserCredential = yield call(loginFirebaseUser, authResponse)

    // NOTE:
    // Create Promise to handle signup
    
    let userDetails: FirebaseAuthUser;
    if(firebaseResponse.user !== null){
      userDetails = {
        name: firebaseResponse.user.displayName,
        email: firebaseResponse.user.email,
        uid: firebaseResponse.user.uid,
        iconUrl: firebaseResponse.user.photoURL
      }
    }

    //Handles signup if first time user
    if (firebaseResponse.additionalUserInfo.isNewUser) {
      yield call(createNewUser, userDetails)
    }

    const user: User = {
      name: userDetails.name,
      email: userDetails.email,
      iconUrl: userDetails.iconUrl
    }

    yield put(setUserAction(user))
    yield put(setIsLoadingAction(false));
    // NOTE:
    // Restructure history.push() to componenet layer ... Should not be in Redux layer.
    ////action.payload.history.push('/')

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