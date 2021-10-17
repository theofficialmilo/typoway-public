import { db} from '../utils/firebase'

//Get list of store templates
export const getTemplateList =  () => {
  return db.collection("marketplace").get();
}

export const getTopContributors = () => {
  return db.collection("contributors").get()
}

export const getUserData = (id) => {
  return db.collection('contributors').doc(id).get()
    .then(doc => {
      const docData = doc.data()
      const data = {
        id: doc.id,
        ...docData
      }
      return (data);
    })
    .catch(err => {
      return err
    })
}

//Get template data by Id
export const getTemplate = (id) => {
  return db.collection("marketplace").doc(id).get()
    .then(doc => {
      const docData = doc.data()
      const data = {
        id: doc.id,
        ...docData
      }
      return (data)
    })
    .catch(err => {
      return err
    })
}

