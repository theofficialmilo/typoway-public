import {AnyAction} from 'redux';
import { CreateTemplateForm, EditorTemplateData, UpdateTemplate} from "../../interfaces/Library"

const initialState: any= {
  isLoading: true,
  isReady: false,
  template: null,
}

const SET_TEMPLATE = "editor/SET_TEMPLATE";
const CLEAR_TEMPLATE = "editor/CLEAR_TEMPLATE";
const UPDATE_TEMPLATE = "editor/UPDATE_TEMPLATE";

const SET_IS_LOADING = "editor/SET_IS_LOADING";
const SET_IS_READY = "editor/SET_IS_READY";

export const GET_TEMPLATE = "editor/GET_TEMPLATE";
export const CREATE_TEMPLATE = "editor/CREATE_TEMPLATE"
export const SAVE_TEMPLATE = "editor/SAVE_TEMPLATE"


const editorReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    case SET_IS_READY:
      return {
        ...state,
        isReady: action.payload
      }

    case SET_TEMPLATE: 
      return {
        ...state,
        template: action.payload
      }

    case CLEAR_TEMPLATE: 
      return {
        ...state,
        template: null,
        isLoading: true,
        isReady: false
      }

    case UPDATE_TEMPLATE:
      return {
        ...state,
        template: {
          ...state.template,
          dataJson: action.payload.dataJson,
          dataHtml: action.payload.dataHtml
        }
      }

    default:
      return state
  }
}

export default editorReducer

//Action Creators

export const setIsLoadingAction = (isLoading: boolean) => {
  return {
    type: SET_IS_LOADING,
    payload: isLoading
  }
}

export const setIsReadyAction = (isReady: boolean) => {
  return {
    type: SET_IS_READY,
    payload: isReady
  }
}

export const setTemplateAction = (template: EditorTemplateData) => {
  return {
    type: SET_TEMPLATE,
    payload: template
  }
}

export const clearTemplateAction = () => {
  return {
    type: CLEAR_TEMPLATE
  }
}

export const updateTemplateAction = (templateData: UpdateTemplate) => {
  return {
    type: UPDATE_TEMPLATE,
    payload: templateData
  }
}

//Saga Connectors
export const getTemplateAction = (templateId: string) => {
  return {
    type: GET_TEMPLATE,
    payload: templateId
  }
}

export const createTemplateAction = (templateForm: CreateTemplateForm) => {
  return {
    type: CREATE_TEMPLATE,
    payload: templateForm
  }
}

export const saveTemplateAction = (template: EditorTemplateData) => {
  return {
    type: SAVE_TEMPLATE,
    payload: template
  }
}