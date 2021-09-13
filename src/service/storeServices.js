import { db} from '../utils/firebase'

//Get list of store templates
export const getTemplateList =  () => {
  return db.collection("marketplace").get()
    .then(querySnapshot => {
      const data = []
      querySnapshot.forEach((doc) => {
        const docData = doc.data()
        let document =  {
          id: doc.id,
          ...docData
        }
        data.push(document)
      })
      return data;
    })
    .catch(err => {
      console.log(err)
    })
}

//Get List of store templates by type
export const getTemplateListByCategory = (template) => {
  return db.collection("marketplace").where('templateType', '==', template).get()
    .then(querySnapshot => {
      const data = []
      querySnapshot.forEach((doc) => {
        const docData = doc.data()
        let document =  {
          id: doc.id,
          ...docData
        }
        data.push(document)
      })
      return data;
    })
    .catch(err => {
      console.log(err)
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
      console.log(err)
    })
}

export const getTopContributors = () => {
  return db.collection("contributors").get()
    .then(querySnapshot => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data())
      })
      return data;
    })
    .catch(err => {
      console.log(err)
    })
}