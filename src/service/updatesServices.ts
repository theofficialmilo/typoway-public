import { Update } from '../interfaces/Updates';
import { db } from '../utils/firebase';

//Gets list of updates 
export const getNewsList = (email: string) => {
  return db.collection("news").orderBy("createdOn", "desc").get()
    .then((querySnapshot) => {
      const updateList: Update[] = []
      querySnapshot.forEach((doc) => {
        const document = doc.data();
        updateList.push({
          title: document.title,
          message: document.message,
          features: document.features,
          upcoming: document.upcoming
        })
      })
      return updateList
    })
    .catch(err =>
      console.log(err)
    )
}
