import LocalStorageService from './local-storage-service'

const ProfilesLocalStorageService = () => {

  const _replacer = (key, value) => {
    if (key === "img") return undefined;
    else return value;
  }

  const saveProfiles = (value) => {
    let stringProfiles = JSON.stringify({ profiles: value }, _replacer)
    LocalStorageService.save('profiles', stringProfiles)
  }

  const openProfiles = () => {
    let stringProfiles = LocalStorageService.open('profiles')
    return JSON.parse(stringProfiles).profiles
  }

  const removeProfiles = () => {
    LocalStorageService.removeProfiles('profiles')
  }

  return {
    saveProfiles,
    openProfiles,
    removeProfiles,
  }
}

export default ProfilesLocalStorageService()