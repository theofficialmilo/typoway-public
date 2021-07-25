import { call, put } from 'redux-saga/effects'
import { getTemplateList } from '../../service/templateServices'

import { setListAction, setLoadingAction } from './templateDucks'
import { setAlertAction } from '../app/appDucks';

export function* handleGetList({ payload }) {
  try {
    yield put(setLoadingAction(true));

    const response = yield call(getTemplateList, payload);
    var data = [];
    response.forEach(doc => {
      const responseData = doc.data();
      data.push({
        id: doc.id,
        data: {
          name: responseData.name,
          templateType: responseData.templateType,
          createdOn: responseData.createdOn,
          updatedOn: responseData.updatedOn
        }
      });
    });
    yield put(setListAction(data));
    yield put(setLoadingAction(false));
  } catch (error) {
    yield put(setAlertAction({type: 'error', message: error.message}))
  }
}