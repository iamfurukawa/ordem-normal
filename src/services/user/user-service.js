import FirebaseAuthService from './firebase/firebase-auth-service'
import FirebaseFirestoreService from './firebase/firebare-firestore-service'

const UserService = () => {

  const USER = 'user'

  const userSave = async () => {
    const currentUser = FirebaseAuthService.getCurrentUser()
    await FirebaseFirestoreService.save(USER, currentUser.uid, {
      displayName: currentUser.displayName,
      role: '1'
    })
  }

  const userLoad = async () => {
    const currentUser = FirebaseAuthService.getCurrentUser()
    const userLoaded = await FirebaseFirestoreService.get(USER, currentUser.uid)
    return { uuid: currentUser.uid, displayName: currentUser.displayName, role: userLoaded.role }
  }

  return { userSave, userLoad }
}

export default UserService()