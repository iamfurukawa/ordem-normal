import FirebaseService from './firebase-service'

const FirebaseFirestoreService = () => {

  const init = () => {
    return FirebaseService.app().firestore()
  }

  const save = async (collection, key, data) => {
    await init().collection(collection).doc(key).add(data)
  }

  const update = async (collection, key, newData) => {
    const data = await init().collection(collection).doc(key)
    data.update(newData)
  }

  const get = async (collection, key) => {
    //https://firebase.google.com/docs/firestore/query-data/queries
    return await init().collection(collection).doc(key).get()
  }

  const remove = async (collection, key) => {
    return await init().collection(collection).doc(key).delete()
  }
  

  return {
    save,
    get,
    update,
    remove,
  }
}

export default FirebaseFirestoreService()