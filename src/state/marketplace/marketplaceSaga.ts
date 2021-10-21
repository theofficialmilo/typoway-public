import {call, put} from 'redux-saga/effects'

import { FQuerySnapshot } from '../../interfaces/TypeHelper';

import { setAlertAction } from '../app/appDucks';

import { Contributor, Template } from '../../interfaces/Marketplace';
import { setContributorsAction, setIsLoading, setTemplatesAction } from './marketplaceDucks';
import { getTemplateList, getTopContributors } from '../../service/storeServices'

export function* handleGetMarketplaceData () {
  try{
    yield put(setIsLoading(true));
    const listResponse: FQuerySnapshot = yield call(getTemplateList);
    const contributorResponse: FQuerySnapshot = yield call(getTopContributors);
    
    var templateList: Template[]=[]
    listResponse.forEach((doc) => {
      const docData = doc.data()
      let document =  {
        id: doc.id,
        imgUrl: docData.imgUrl,
        title: docData.title,
        templateType:docData.templateType,
        price: docData.price,
        account: {
          name: docData.account.name,
          id: docData.account.id
        }
      }
      templateList.push(document)
    })
    
    var contributorData: Contributor[]=[]
    contributorResponse.forEach((doc) => {
      const docData = doc.data()
      let document =  {
        id: doc.id,
        name: docData.name,
        iconUrl: docData.iconUrl
      }
      contributorData.push(document)
    })

    yield put(setTemplatesAction(templateList));
    yield put(setContributorsAction(contributorData));
    yield put(setIsLoading(false));
  }
  //Any type to be updated
  catch(error: any) {
    yield put(setAlertAction({type: 'error', message: error.message}))
  }
}