const initialState = {
  isLoading: true,
  list: [],
}

//Action Types
const SET_LIST = "template/SET_LIST"
const CLEAR_LIST = "template/CLEAR_LIST"

export const GET_LIST = "template/GET_LIST"
export const SET_LOADING = "template/SET_LOADING"


//Main Reducer
const templateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        list: action.payload
      }

    case CLEAR_LIST:
      return {
        ...state,
        list: []
      }

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state
  }
}

export default templateReducer

//Redux Action Creators
export const setListAction = (payload) => {
  return {
    type: SET_LIST,
    payload: payload
  }
}

export const setLoadingAction = (payload) => {
  return {
    type: SET_LOADING,
    payload: payload
  }
}

export const clearListAction = () => {
  return {
    type: CLEAR_LIST
  }
}

//Saga Connector
export const getListAction = (email) => {
  return {
    type: GET_LIST,
    payload: email
  }
}