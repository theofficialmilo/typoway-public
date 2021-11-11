import { db } from '../utils/firebase';
import { FDocumentData } from '../interfaces/TypeHelper';
import { Template } from '../interfaces/Library';

//Get list of templates according to accountId
export const getTemplateList = (emailId: string) => {
  return db.collection("templates").where('accountId', '==', emailId).get();
}

//Get individual templateData according to templateId
export const getTemplate = (id: string) => {
  return db.collection('templates').doc(id).get()
}

//Sends a request to create a template in Firebase 
export const createTemplate = (templateData: Template) => {
  return db.collection('templates').add(templateData)
}

//Sends a request to update a template in Firebase 
export const updateTemplate = (templateData: Template) => {
  return db.collection('templates').doc(templateData.id).update(templateData)
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