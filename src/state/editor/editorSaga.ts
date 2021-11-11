import { auth } from '../../utils/firebase'
import { call, put } from 'redux-saga/effects'

import { setAlertAction } from '../app/appDucks';
import { createTemplate, getDefaultTemplate, getTemplate, updateTemplate } from '../../service/libraryServices'

import { CreateTemplateForm, EditorTemplateData, Template } from '../../interfaces/Library';
import { FDocumentData } from '../../interfaces/TypeHelper';
import { clearTemplateAction, setTemplateAction } from './editorDucks';

import { history } from '../../utils/history';


export function* handleGetTemplate(action: {type: string, payload: string}) {
  try {
    const response: firebase.default.firestore.QueryDocumentSnapshot = yield call(getTemplate, action.payload)
    if(response.exists) {
      const data: FDocumentData = response.data();
      if(data !== undefined) {
        const template: EditorTemplateData = {
          id: response.id,
          name: data.name,
          templateType: data.templateType,
          dataJson: data.dataJson,
          dataHtml: data.dataHtml
        }
        yield put(setTemplateAction(template));
      }
    }
  }catch(error: any) {
    yield put(setAlertAction({ type: 'error', message: error.message }))
  }
}

export function* handleCreateTemplate(action: {type: string, payload: CreateTemplateForm}) {
  try{
    if(auth.currentUser !== null && auth.currentUser.email !== null){
      let dataJson = '';
      if(action.payload.designType !== undefined && action.payload.designType === 1){
        dataJson = yield call(getDefaultTemplate, action.payload.templateType.toString())
      }
      if(action.payload.dataJson !== undefined){
        dataJson = action.payload.dataJson
      }
      const template: Template = {
        accountId: auth.currentUser.email,
        name: action.payload.name,
        templateType: action.payload.templateType,
        dataJson: dataJson,
        dataHtml: '',
        createdOn: new Date(),
        updatedOn: new Date()
      }
      const response: FDocumentData = yield call(createTemplate, template);
      history.push(`/editor/edit/${response.id}`)
  }
  }catch(error: any){
    yield put(setAlertAction({ type: 'error', message: error.message }))
  }
}

export function* handleSaveTemplate(action: {type: string, payload: EditorTemplateData}) {
  try{
    const data: Template = {
      id: action.payload.id,
      templateType: action.payload.templateType,
      name: action.payload.name,
      dataJson: action.payload.dataJson,
      dataHtml: action.payload.dataHtml,
      updatedOn: new Date()
    }
    yield call(updateTemplate, data);
    history.push(`/library`)
    yield put(setAlertAction({type: 'success', message: 'Template successfully saved!'}))
    yield put(clearTemplateAction());
  }catch(error: any){
    yield put(setAlertAction({type: 'error', message: error.message}))
  }
}