import "firebase/auth"
import { Action, AnyAction } from "redux"
import { User, UserState } from "../../interfaces/User"

//Inital State for User 
const initialState: UserState = {
  isAuth: false,
  user: {
    email: '',
    name: '',
    iconUrl: ''
  }
}

//Reduder User Action Types
const SET_USER = "user/SET_USER"
const CLEAR_USER = "user/CLEAR_USER"

export const LOG_IN = "user/LOG_IN"
export const SIGN_UP = "user/SIGN_UP"
export const LOG_OUT = "user/LOG_OUT"

export const FIREBASE_LOGIN = "user/FIREBASE_LOGIN"

//Reducer function
const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuth: true,
        user: action.payload
      }

    case CLEAR_USER:
      return {
        ...state,
        isAuth: false,
        user: {}
      }

    default:
      return state;
  }
}

export default userReducer


//Action Creators
export const signupAction = () => {
  return {
    type: SIGN_UP
  }
}

export const loginAction = (action: Action) => {
  return {
    type: LOG_IN,
    payload: action
  }
}

export const logoutUserAction = () => {
  return {
    type: LOG_OUT
  }
}

export const setUserAction = (user: User) => {
  return {
    type: SET_USER,
    payload: user
  }
}

export const clearUserAction = () => {
  return {
    type: CLEAR_USER
  }
}

//Side-Effects
export const handleFirebaseLoginAction = (id_token: string, access_token: string) => {
  return {
    type: FIREBASE_LOGIN,
    payload: {
      id_token: id_token,
      access_token: access_token
    }
  }
}