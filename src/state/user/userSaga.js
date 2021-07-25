import { call, put } from 'redux-saga/effects'

import { loginFirebaseUser, signOutFirebaseUser, createNewUser } from '../../service/userServices'

import { setUserAction, clearUserAction } from './userDucks'
import { setIsLoadingAction, setAlertAction } from '../app/appDucks'

export function* handleLogin({ payload }) {
  try {
    yield put(setIsLoadingAction(true));
    const currentUser = window.gapi.auth2.getAuthInstance().currentUser.get();
    const authResponse = currentUser.getAuthResponse(true);

    const firebaseResponse = yield call(loginFirebaseUser, authResponse)

    const userDetails = {
      name: firebaseResponse.user.displayName,
      email: firebaseResponse.user.email,
      uid: firebaseResponse.user.uid
    }

    //Handles signup if first time user
    if (firebaseResponse.additionalUserInfo.isNewUser) {
      yield call(createNewUser, userDetails)
    }

    const user = {
      name: userDetails.name,
      email: userDetails.email,
    }

    yield put(setUserAction(user))
    yield put(setIsLoadingAction(false));
    payload.history.push('/')
    //yield login successful 

  } catch (error) {
    yield put(setAlertAction({ type: 'error', message: 'Something went wrong. Please try again later' }))
    //putError Message
  }
}

export function* handleLogout() {
  try {
    yield call(signOutFirebaseUser)
    yield put(clearUserAction())
  } catch (error) {
    yield put(setAlertAction({ type: 'error', message: 'Something went wrong. Please try again later' }))
  }
}