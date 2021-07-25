import { takeLatest } from 'redux-saga/effects'

import { handleLogin, handleLogout } from './user/userSaga'
import { LOG_OUT, LOG_IN } from './user/userDucks'

import { GET_MESSAGES, GET_MESSAGES_DATA, GET_MESSAGE_DATA } from './message/messageDucks'
import { handleGetMessages, handleGetMessagesData, handleGetOneMessageData } from './message/messageSaga'

import { GET_LIST } from './template/templateDucks'
import { handleGetList } from './template/templateSaga'

export function* watcherSaga() {
  yield takeLatest(LOG_IN, handleLogin)
  yield takeLatest(LOG_OUT, handleLogout)

  yield takeLatest(GET_MESSAGES, handleGetMessages)
  yield takeLatest(GET_MESSAGES_DATA, handleGetMessagesData)

  yield takeLatest(GET_MESSAGE_DATA, handleGetOneMessageData)


  yield takeLatest(GET_LIST, handleGetList)
}