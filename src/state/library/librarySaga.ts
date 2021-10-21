import { call, put } from 'redux-saga/effects'

import { setAlertAction } from '../app/appDucks';

import { setListAction, setLoadingAction } from './libraryDucks'
import { getTemplateList } from '../../service/libraryServices'

import { Template } from '../../interfaces/Library';
import { FQuerySnapshot } from '../../interfaces/TypeHelper';

export function* handleGetList(action: {type:string, payload: string }) {
  try {
    yield put(setLoadingAction(true));
    const response: FQuerySnapshot = yield call(getTemplateList, action.payload);
    var data: Template[] = [];
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