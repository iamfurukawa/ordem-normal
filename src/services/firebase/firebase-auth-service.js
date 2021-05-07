import FirebaseService from './firebase-service'

const FirebaseAuthService = () => {

  const getUser = (setUser) => {
    return FirebaseService.app().auth().onAuthStateChanged((user) => {
      if (user) setUser(user)
      else setUser(null)
    })
  }

  const getCurrentUser = () => {
    return FirebaseService.app().auth().getCurrentUser
  }

  return { getUser, getCurrentUser }
}

export default FirebaseAuthService()