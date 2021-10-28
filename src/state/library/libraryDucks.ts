import { AnyAction } from "redux"
import { CreateTemplateForm, LibraryState, Template } from "../../interfaces/Library"

//To store user's list of templates and handle loading
const initialState: LibraryState = {
  isLoading: true,
  list: [],
  editorTemplate: null,
  editorIsLoading: true,
}

//Action Types
const SET_LIST = "template/SET_LIST";
const CLEAR_LIST = "template/CLEAR_LIST";

const SET_EDITOR_TEMPLATE = "template/SET_EDITOR_TEMPLATE";
const CLEAR_EDITOR_TEMPLATE = "template/CLEAR_EDITOR_TEMPLATE";

export const GET_LIST = "template/GET_LIST";
export const SET_LOADING = "template/SET_LOADING";

export const CREATE_TEMPLATE = "template/CREATE_TEMPLATE"
export const SET_EDITOR_LOADING = "tempalte/SET_EDITOR_LOADING"

//Main Reducer
const templateReducer = (state = initialState, action: AnyAction) => {
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

    case SET_EDITOR_TEMPLATE:
      return {
        ...state,
        editorTemplate: action.payload
      }

    case CLEAR_EDITOR_TEMPLATE:
      return {
        ...state,
        editorTemplate: undefined
      }

    case SET_EDITOR_LOADING: 
      return {
        ...state,
        editorIsLoading: action.payload
      }


    default:
      return state
  }
}

export default templateReducer

//Redux Action Creators
export const setListAction = (templateList: Template[]) => {
  return {
    type: SET_LIST,
    payload: templateList
  }
}

export const clearListAction = () => {
  return {
    type: CLEAR_LIST
  }
}

export const setTemplateAction = (template: Template) => {
  return {
    type: SET_EDITOR_TEMPLATE,
    payload: template
  }
}

export const clearTemplateAction = () => {
  return {
    type: CLEAR_EDITOR_TEMPLATE
  }
}

export const setLoadingAction = (isLoading: boolean) => {
  return {
    type: SET_LOADING,
    payload: isLoading
  }
}

export const setEditorLoadingAction = (isLoading: boolean) => {
  return {
    type: SET_EDITOR_LOADING,
    payload: isLoading
  }
}


//Saga Connector
export const getListAction = (emailId: string) => {
  return {
    type: GET_LIST,
    payload: emailId
  }
}

export const createTemplateAction = (templateForm: CreateTemplateForm) => {
  return {
    type: CREATE_TEMPLATE,
    payload: templateForm
  }
}

export const editTemplateAction = () => {

}
