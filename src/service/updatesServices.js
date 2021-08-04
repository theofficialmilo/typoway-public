import { db } from '../utils/firebase';

//Gets list of updates 
export const getNewsList = (email) => {
  return db.collection("news").orderBy("createdOn", "desc").get()
    .then((querySnapshot) => {
      const data = []
      querySnapshot.forEach((doc) => {
        data.push(doc.data())
      })
      return data
    })
    .catch(err =>
      console.log(err)
    )
}
