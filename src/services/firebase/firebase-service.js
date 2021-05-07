import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const FirebaseService = () => {

  const firebaseConfig = () => {
    return {
      apiKey: 'AIzaSyCyO9rOH2H5WzTbMAj7zN4XEoYgdh7z55k',
      authDomain: 'ordem-normal.firebaseapp.com',
      projectId: 'ordem-normal',
      storageBucket: 'ordem-normal.appspot.com',
      messagingSenderId: '82768552929',
      appId: '1:82768552929:web:9ee3f4dcfaae4842b028a0'
    }
  }

  const app = () => {
    if (!firebase.apps.length)
      return firebase.initializeApp(firebaseConfig())

    firebase.auth().onAuthStateChanged((user) => {
      if (user) user.getIdToken()
    })
    
    return firebase.app()
  }

  return { app }
}

export default FirebaseService()