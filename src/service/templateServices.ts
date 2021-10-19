import { Template } from '../interfaces/Library';
import { db, auth } from '../utils/firebase';

//Gets list of templates according to accountId
export const getTemplateList = (email: string) => {
  return db.collection("templates").where('accountId', '==', email).get();
}

//Get individual templateData according to Id
export const getTemplate = (id: string) => {
  return db.collection('templates').doc(id).get()
    .then(doc => {
      if (doc.exists) {
        const id = doc.id
        const data: firebase.default.firestore.DocumentData | undefined = doc.data();
        if(data !== undefined) {
          return {
            id: id,
            name: data.name,
            templateType: data.templateType,
            dataJson: data.dataJson,
            dataHtml: data.dataHtml
          } 
        }
      }
      else {
        return 'Document not found'
      }
    })
    .catch((err) => {
      return err
    })
}

//Sends a request to create a template in Firebase 
export const createTemplate = (templateData: Template) => {
  let data: any;
  if(auth.currentUser !== null){
    data = {
      accountId: auth.currentUser.email,
      name: templateData.name,
      templateType: templateData.templateType,
      dataJson: templateData.dataJson,
      dataHtml: '',
      createdOn: new Date(),
      updatedOn: new Date()
   }
}

  return db.collection('templates').add(data)
    .then(resp => {
      return resp.id
    })
    .catch(err => {
      return err
    })
}

//Sends a request to update a template in Firebase 
export const updateTemplate = (templateData: Template) => {
  let data = {
    name: templateData.name,
    dataJson: templateData.dataJson,
    dataHtml: templateData.dataHtml,
    updatedOn: new Date()
  }

  return db.collection('templates').doc(templateData.id).update(data)
    .then(resp => {
      return resp
    })
    .catch(error => {
      return error
    })
}

//Sends a request to delete a template in Firebase 
export const deleteTemplate = (id: string) => {
  return db.collection("templates").doc(id).delete()
    .then(() => {
      return "Document successfully deleted!";
    }).catch((error) => {
      return error;
    })
}

//Sends a request to get Json Data of selected template in Firebase 
export const getDefaultTemplate = (type: string) => {
  return db.collection('defaultTemplates').doc(type).get()
    .then((doc: firebase.default.firestore.DocumentSnapshot<firebase.default.firestore.DocumentData>) => {
      if (doc.exists) {
        const document: firebase.default.firestore.DocumentData | undefined = doc.data();
        if(document !== undefined) {
          return document.data;
        }
      }
      else {
        throw new Error("Document not found!");
      }
    })
    .catch((error) => {
      return error;
    })
}