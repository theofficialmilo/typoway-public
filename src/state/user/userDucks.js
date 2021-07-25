import "firebase/auth"

//Inital State for User 
const initialState = {
  isAuth: false,
  user: {
    email: '',
    name: ''
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
const userReducer = (state = initialState, action) => {
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

export const loginAction = (payload) => {
  return {
    type: LOG_IN,
    payload: payload
  }
}

export const logoutUserAction = () => {
  return {
    type: LOG_OUT
  }
}

export const setUserAction = (payload) => {
  return {
    type: SET_USER,
    payload: payload
  }
}

export const clearUserAction = (payload) => {
  return {
    type: CLEAR_USER
  }
}

//Side-Effects
export const handleFirebaseLoginAction = (id_token, access_token) => {
  return {
    type: FIREBASE_LOGIN,
    payload: {
      id_token: id_token,
      access_token: access_token
    }
  }
}