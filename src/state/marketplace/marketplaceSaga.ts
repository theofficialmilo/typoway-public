import {call, put} from 'redux-saga/effects'
import { Contributor, Template } from '../../interfaces/Marketplace';
import { getTemplateList, getTopContributors } from '../../service/storeServices'
import { setAlertAction } from '../app/appDucks';
import { setContributorsAction, setIsLoading, setTemplatesAction } from './marketplaceDucks';

export function* handleGetMarketplaceData () {
  try{
    yield put(setIsLoading(true));
    const listResponse: any = yield call(getTemplateList);
    const contributorResponse = yield call(getTopContributors);
    
    var templateList: Template[]=[]
    listResponse.forEach((doc: any) => {
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
  catch(error) {
    yield put(setAlertAction({type: 'error', message: error.message}))
  }
}