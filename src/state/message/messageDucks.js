const initialState = {
  messages: [],
  message: null,
  isLoadingList: true,
  isLoading: false,
};

// Email Variables
export const SET_MESSAGE = "message/SET_MESSAGE";
export const GET_MESSAGE = "message/GET_MESSAGE";
export const GET_MESSAGE_DATA = "message/GET_MESSAGE_DATA"
export const SET_MESSAGES = "message/SET_MESSAGES";
export const GET_MESSAGES = "message/GET_MESSAGES";
export const GET_MESSAGES_DATA = "message/GET_MESSAGES_DATA"
export const CLEAR_MESSAGES = "message/CLEAR_MESSAGES";
export const CLEAR_MESSAGE = "message/CLEAR_MESSAGE";
export const SET_LOADING = "message/SET_LOADING";
export const SET_LOADING_LIST = "message/SET_LOADING_LIST";


export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      }

    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload
      }

    case CLEAR_MESSAGES: {
      return {
        ...state,
        messages: []
      }
    }

    case CLEAR_MESSAGE: {
      return {
        ...state,
        message: null
      }
    }

    case SET_LOADING_LIST:
      return {
        ...state,
        isLoadingList: action.payload
      }

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state;
  }
}

export default messageReducer

//Action Creators
export const setMessagesAction = (messages) => {
  return {
    type: SET_MESSAGES,
    payload: messages
  }
}

export const setMessageAction = (message) => {
  return {
    type: SET_MESSAGE,
    payload: message
  }
}

export const clearMessagesAction = () => {
  return {
    type: CLEAR_MESSAGES
  }
}

export const clearMessageAction = () => {
  return {
    type: CLEAR_MESSAGE
  }
}

export const setLoadingAction = (bool) => {
  return {
    type: SET_LOADING,
    payload: bool
  }
}

export const setLoadingListAction = (bool) => {
  return {
    type: SET_LOADING_LIST,
    payload: bool
  }
}

//Redux Actions
export const getMessagesListAction = () => {
  return {
    type: GET_MESSAGES,
  }
}

export const getMessageDataAction = (messages) => {
  return {
    type: GET_MESSAGES_DATA,
    payload: messages
  }
}

export const getOneMessageDataAction = (messageId) => {
  return {
    type: GET_MESSAGE_DATA,
    payload: messageId
  }
}

