import _ from 'lodash'

import Profile from './character-profile'

const ProfileMapper = () => {

  const toJson = (data) => {
    let profile = new Profile()
    return profile
  }

  const fromJson = (jsonData) => {
    return _.omit(jsonData, ['img', 'uuid'])
  }

  return { fromJson, toJson }
}

export default ProfileMapper