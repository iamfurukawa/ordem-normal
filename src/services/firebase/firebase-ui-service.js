import firebase from 'firebase/app'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

import FirebaseService from './firebase-service'

const FirebaseUIService = () => {

  let authUI = null

  const init = () => {
    if (!authUI) authUI = new firebaseui.auth.AuthUI(FirebaseService.app().auth())
    return authUI
  }

  const config = () => {
    return {
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          return true;
        },
        uiShown: () => {
          //document.getElementById('loader').style.display = 'none'
        }
      },
      signInFlow: 'popup',
      signInSuccessUrl: '/',
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: true
        },
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          requireDisplayName: true
        }
      ]
    }
  }

  const start = () => {
    init().start('#firebaseui-auth-container', config())
  }

  const stop = () => {
    FirebaseService.app().auth().signOut()
  }

  return { start, stop, }
}

export default FirebaseUIService()