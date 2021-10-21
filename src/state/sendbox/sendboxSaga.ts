import { call, put, all } from 'redux-saga/effects'

import { setLoadingListAction, setLoadingAction, clearMessagesAction, getMessageDataAction, setMessagesAction, setMessageAction } from './sendboxDucks'
import { getMessages, getMessageData } from '../../service/messageServices'
import { getMessageBody } from '../../utils/helper';

import { setAlertAction } from '../app/appDucks'
import { Message } from '../../interfaces/Message';
import { GListMessagesResponse } from '../../interfaces/TypeHelper';

export function* handleGetMessages() {
  try {
    yield put(setLoadingListAction(true));
    yield put(clearMessagesAction());

    const response: gapi.client.Response<GListMessagesResponse> = yield call(getMessages)
    yield put(getMessageDataAction(response));
  } catch (error: any) {
    yield put(setAlertAction({ type: 'error', message: error.message }))
    yield put(setLoadingListAction(true));
  }
}

export function* handleGetMessagesData(resp: {type: string, payload: gapi.client.Response<GListMessagesResponse>}) {
  try {
    const messages = resp.payload.result.messages ? resp.payload.result.messages : [];
    const res: gapi.client.Response<Message>[] = yield all(
      messages.map((message) => {
        if(message.id !== undefined)
          return call(getMessageData, message.id)
      }))
    yield all(res.map((message: gapi.client.Response<Message>) => put(setMessagesAction(message.result))))
    yield put(setLoadingListAction(false));
  } catch (error: any) {
    yield put(setAlertAction({ type: 'error', message: error.message }))
    yield put(setLoadingListAction(true));
  }
}

export function* handleGetOneMessageData(resp: {type: string, payload: string}) {
  try {
    //Start Loading
    yield put(setLoadingAction(true));
    const message: gapi.client.Response<Message> = yield call(getMessageData, resp.payload)
    const messageData = message.result
    const dataPayload = {
      headers: messageData.payload.headers,
      data: getMessageBody(messageData.payload)
    }
    yield put(setMessageAction(dataPayload))
    //End Loading
    yield put(setLoadingAction(false))
  } catch (error: any) {
    yield put(setAlertAction({ type: 'error', message: error.message }))
  }
}
