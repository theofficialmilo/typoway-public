import { call, put, all } from 'redux-saga/effects'

import { setLoadingListAction, setLoadingAction, clearMessagesAction, getMessageDataAction, setMessagesAction, setMessageAction } from './messageDucks'
import { getMessages, getMessageData } from '../../service/messageServices'
import { getMessageBody } from '../../utils/helper';

import {setAlertAction} from '../app/appDucks' 

export function* handleGetMessages() {
  try {
    yield put(setLoadingListAction(true));
    yield put(clearMessagesAction());

    const response = yield call(getMessages)
    // Send Id list to getMessagesData to get Message Data foreach Id
    yield put(getMessageDataAction(response));
  } catch (error) {
    yield put(setAlertAction({type: 'error', message: error.message}))
  }
}

export function* handleGetMessagesData(resp) {
  try {
    const messages = resp.payload.result.messages ? resp.payload.result.messages : [];
    const res = yield all(messages.map(message => call(getMessageData, message.id)))
    yield all(res.map(message => put(setMessagesAction(message.result))))
    yield put(setLoadingListAction(false));
  } catch (error) {
    yield put(setAlertAction({type: 'error', message: error.message}))
  }
}

export function* handleGetOneMessageData({ payload }) {
  try {
    //Start Loading
    yield put(setLoadingAction(true));
    let message = yield call(getMessageData, payload)
    message = message.result
    
    const dataPayload = {
      headers:  message.payload.headers,
      data : getMessageBody(message.payload)
    }
    yield put(setMessageAction(dataPayload))
    //End Loading
    yield put(setLoadingAction(false))
  } catch (error) {
    yield put(setAlertAction({type: 'error', message: error.message}))
  }
}
