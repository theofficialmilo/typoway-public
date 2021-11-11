import { takeLatest } from 'redux-saga/effects'

import { handleLogin, handleLogout } from './user/userSaga'
import { LOG_OUT, LOG_IN } from './user/userDucks'

import { GET_MESSAGES, GET_MESSAGES_DATA, GET_MESSAGE_DATA } from './sendbox/sendboxDucks'
import { handleGetMessages, handleGetMessagesData, handleGetOneMessageData } from './sendbox/sendboxSaga'

import { GET_LIST } from './library/libraryDucks'
import { handleGetList } from './library/librarySaga'

import { GET_TEMPLATE, CREATE_TEMPLATE, SAVE_TEMPLATE } from './editor/editorDucks'
import { handleCreateTemplate, handleGetTemplate, handleSaveTemplate} from './editor/editorSaga'

import { GET_MARKETPLACE_DATA } from './marketplace/marketplaceDucks'
import { handleGetMarketplaceData } from './marketplace/marketplaceSaga'

export function* watcherSaga() {
  //User Side Effects
  yield takeLatest(LOG_IN, handleLogin)
  yield takeLatest(LOG_OUT, handleLogout)

  //Sendbox Side Effects
  yield takeLatest(GET_MESSAGES, handleGetMessages)
  yield takeLatest(GET_MESSAGES_DATA, handleGetMessagesData)
  yield takeLatest(GET_MESSAGE_DATA, handleGetOneMessageData)

  //Library Side Effects
  yield takeLatest(GET_LIST, handleGetList);

  //Editor Side Effects
  yield takeLatest(CREATE_TEMPLATE, handleCreateTemplate)
  yield takeLatest(GET_TEMPLATE, handleGetTemplate)
  yield takeLatest(SAVE_TEMPLATE, handleSaveTemplate)

  //Marketplace Side Effects
  yield takeLatest(GET_MARKETPLACE_DATA, handleGetMarketplaceData)
}