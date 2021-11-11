import { AnyAction } from "redux";
import { Contributor, MarketplaceState, Template } from "../../interfaces/Marketplace";

const initialState: MarketplaceState = {
  selectedId: null,
  templates: [],
  contributors: [],
  isLoading: true,
}

export const SET_ID = "marketplace/SET_ID";
export const CLEAR_ID = "marketplace/CLEAR_ID";

export const SET_TEMPLATES = "marketplace/SET_TEMPLATES";
export const SET_CONTRIBUTORS = "marketplace/SET_CONTRIBUTORS";
export const SET_LOADING = "marketplace/SET_LOADING";

export const GET_MARKETPLACE_DATA = 'marketplace/GET_MARKETPLACE_DATA"';
const CLEAR_MARKETPLACE_DATA = 'marketplace/CLEAR_MARKETPLACE_DATA';

export const marketplaceReducer = (state = initialState, action: AnyAction)=> {
  switch(action.type) {
    case SET_ID:
      return {
        ...state,
        selectedId: action.payload
      }
    case SET_TEMPLATES: 
      return{
        ...state,
        templates: [...state.templates, ...action.payload],
      }

    case SET_CONTRIBUTORS: 
      return{
        ...state,
        contributors: [...state.contributors, ...action.payload]
      }

    case SET_LOADING:
      return  {
        ...state,
        isLoading: action.payload
      }

    case CLEAR_ID: 
      return {
        ...state,
        selectedId: null
      }
    case CLEAR_MARKETPLACE_DATA:
      return {
        ...state,
        templates: [],
        contributors: []
      }

    default:
      return state;
  }
}

export default marketplaceReducer 

//Action Creators
export const setSelectedId = (templateId: string) => {
  return {
    type: SET_ID,
    payload:templateId
  }
}

export const clearSelectedId = () => {
  return {
    type:CLEAR_ID
  }
}

export const setTemplatesAction = (templates:Template[]) => {
  return {
    type: SET_TEMPLATES,
    payload: templates
  }
}

export const setContributorsAction = (contributors:Contributor[]) => {
  return {
    type: SET_CONTRIBUTORS,
    payload: contributors
  }
} 

export const setIsLoading = (isLoading:boolean) => {
  return {
    type: SET_LOADING,
    payload: isLoading
  }
}

export const clearMarketplaceDataAction = () => {
  return {
    type: CLEAR_MARKETPLACE_DATA
  }
}

//Redux Actions
export const getMarketplaceDataAction = () => {
  return {
    type: GET_MARKETPLACE_DATA
  }
}