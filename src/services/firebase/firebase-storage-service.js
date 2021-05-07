import { blobToBase64String } from 'blob-util'
import FirebaseService from './firebase-service'

const FirebaseStorageService = () => {

  const BASE64 = 'base64'
  const PROFILE_IMAGES = 'profile_images/'

  const storage = (name) => {
    return FirebaseService.app().storage().ref().child(PROFILE_IMAGES + name)
  }

  const storeProfileImage = async (base64img, name) => {
    await storage(name).putString(base64img, BASE64)
  }

  const getProfileImage = async (name) => {
    const url = await storage(name).getDownloadURL()
    const response = await fetch(url)
    const data = await response.blob()
    return await blobToBase64String(data)
  }

  const deleteProfileImage = async (name) => {
    await storage(name).delete()
  }

  return {
    storeProfileImage,
    getProfileImage,
    deleteProfileImage,
  }
}

export default FirebaseStorageService()