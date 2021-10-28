import { auth } from '../../utils/firebase'
import { call, put } from 'redux-saga/effects'

import { setAlertAction } from '../app/appDucks';

import { setEditorLoadingAction, setListAction, setLoadingAction, setTemplateAction } from './libraryDucks'
import { createTemplate, getDefaultTemplate, getTemplateList } from '../../service/libraryServices'

import { CreateTemplateForm, StoredTemplate, Template } from '../../interfaces/Library';
import { FQuerySnapshot, FDocumentSnapshot, FDocumentData } from '../../interfaces/TypeHelper';

export function* handleGetList(action: {type:string, payload: string }) {
  try {
    yield put(setLoadingAction(true));
    const response: FQuerySnapshot = yield call(getTemplateList, action.payload);
    var data: StoredTemplate[] = [];
    response.forEach(doc => {
      const responseData = doc.data();
      data.push({
        id: doc.id,
        name: responseData.name,
        templateType: responseData.templateType,
        createdOn: responseData.createdOn,
        updatedOn: responseData.updatedOn
      });
    });
    yield put(setListAction(data));
    yield put(setLoadingAction(false));
  } catch (error: any) {
    yield put(setAlertAction({ type: 'error', message: error.message }))
  }
}

export function* handleCreateTemplate(action: {type: string, payload: CreateTemplateForm}) {
  try{
    yield put(setEditorLoadingAction(true));
    if(auth.currentUser !== null && auth.currentUser.email !== null){
      let dataJson = '';
      if(action.payload.designType === 1){
        dataJson = yield call(getDefaultTemplate, action.payload.designType.toString())
      }
      if(action.payload.dataJson !== undefined){
        dataJson = action.payload.dataJson
      }
      let template: Template = {
        accountId: auth.currentUser.email,
        name: action.payload.name,
        templateType: action.payload.templateType,
        dataJson: dataJson,
        dataHtml: '',
        createdOn: new Date(),
        updatedOn: new Date()
      }
      const response: FDocumentData = yield call(createTemplate, template);
      template = {
        ...template,
        id: response.id
      }
      yield put(setTemplateAction(template));
      yield put(setEditorLoadingAction(false));
  }
    //Update Template Id
  }catch(error: any){
    yield put(setAlertAction({ type: 'error', message: error.message }))
  }
}