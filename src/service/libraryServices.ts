import { db, auth } from '../utils/firebase';
import { FDocumentData } from '../interfaces/TypeHelper';
import { StoredTemplate, Template } from '../interfaces/Library';

//Get list of templates according to accountId
export const getTemplateList = (emailId: string) => {
  return db.collection("templates").where('accountId', '==', emailId).get();
}

//Get individual templateData according to templateId
export const getTemplate = (id: string) => {
  return db.collection('templates').doc(id).get()
    .then(doc => {
      if (doc.exists) {
        const data: FDocumentData | undefined = doc.data();
        if(data !== undefined) return{
          id: doc.id,
          name: data.name,
          templateType: data.templateType,
          dataJson: data.dataJson,
          dataHtml: data.dataHtml
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
  return db.collection('templates').add(templateData)
}

//Sends a request to update a template in Firebase 
export const updateTemplate = (templateData: StoredTemplate) => {
  const data = {
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
    .then((doc: firebase.default.firestore.DocumentSnapshot<FDocumentData>) => {
      if (doc.exists) {
        const document: FDocumentData | undefined = doc.data();
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