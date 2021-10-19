import { call, put } from 'redux-saga/effects'
import { getTemplateList } from '../../service/templateServices'

import { setListAction, setLoadingAction } from './templateDucks'
import { setAlertAction } from '../app/appDucks';
import { Template } from '../../interfaces/Library';

export function* handleGetList(action: { payload: string }) {
  try {
    yield put(setLoadingAction(true));

    const response: firebase.default.firestore.QuerySnapshot = yield call(getTemplateList, action.payload);
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