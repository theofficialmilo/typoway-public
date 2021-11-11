import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { watcherSaga } from './rootSaga'

import appReducer from './app/appDucks'
import messageReducer from './sendbox/sendboxDucks'
import userReducer from './user/userDucks'
import templateReducer from './library/libraryDucks'
import marketplaceReducer from './marketplace/marketplaceDucks'
import editorReducer from './editor/editorDucks'

//To consolidate all Reducers
const reducer = combineReducers({
  app: appReducer,
  user: userReducer,
  sendbox: messageReducer,
  editor: editorReducer,
  library: templateReducer,
  marketplace: marketplaceReducer
})

//To integrate redux saga to handle redux side effects
const sagaMiddleWare = createSagaMiddleware()
const middleware = [sagaMiddleWare]

//Allow Redux Dev tools for a more smooth dev process
const composeEnhancers = (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(...middleware)));
sagaMiddleWare.run(watcherSaga);

export type RootState = ReturnType<typeof store.getState>

export default store