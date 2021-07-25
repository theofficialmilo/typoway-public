import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import appReducer from './app/appDucks'
import messageReducer from './message/messageDucks'
import userReducer from './user/userDucks'
import templateReducer from './template/templateDucks'

import { watcherSaga } from './rootSaga'

const reducer = combineReducers({
  user: userReducer,
  app: appReducer,
  message: messageReducer,
  template: templateReducer
})

const sagaMiddleWare = createSagaMiddleware()

const middleware = [sagaMiddleWare]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(...middleware)));

sagaMiddleWare.run(watcherSaga);

export default store