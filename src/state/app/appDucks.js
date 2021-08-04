const initialState = {
  isLoading: false,
  alert: {
    isOpen: false,
    type: 'info',
    message: ''
  }
}

const SET_ISLOADING = "app/SET_ISLOADING"
const SET_ALERT = "app/SET_ALERT"
const CLEAR_ALERT = "app/CLEAR_ALERT"

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ISLOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    case SET_ALERT:
      return {
        ...state,
        alert: {
          isOpen: true,
          type: action.payload.type,
          message: action.payload.message
        }
      }

    case CLEAR_ALERT:
      return {
        ...state,
        alert: {
          isOpen: false,
          type: 'info',
          message: ''
        }
      }

    default:
      return state
  }
}

export default appReducer

export const setIsLoadingAction = (isLoading) => {
  return {
    type: SET_ISLOADING,
    payload: isLoading
  }
}

export const setAlertAction = (data) => {
  return {
    type: SET_ALERT,
    payload: data
  }
}

export const clearAlertAction = () => {
  return {
    type: CLEAR_ALERT
  }
}