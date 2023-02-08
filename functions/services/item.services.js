const { addDoc, collection, getDocs, updateDoc, doc, deleteDoc, getDoc } = require('firebase/firestore')
import db from '../models/firestore.model'

export default class ItemServices {
  async getAllItems() {
    let resultArray = [];
    const testingRef = collection(db, "testingDatabase");
    const docSnap = await getDocs(testingRef);
    docSnap.forEach((doc) => {
      let newObject = {
        docId: doc.id,
        ...doc.data(),
      };
      resultArray.push(newObject);
    });
    return resultArray;
  }

  // testing2

  async getItemById(id) {
    const testingRef = doc(db, "testingDatabase", id);
    const docSnap = await getDoc(testingRef);
    return {
      questionId: docSnap.id,
      ...docSnap.data(),
    };
  }

  async createNewItem(payload) {
    const newItem = await addDoc(collection(db, "testingDatabase"), {
      ...payload,
    });
    return newItem;
  }

  async updateItemById(id, payload) {
    const docRef = doc(db, "testingDatabase", id);
    await updateDoc(docRef, { ...payload });
  }

  async deleteItemById(id) {
    await deleteDoc(doc(db, "testingDatabase", id));
  }
}