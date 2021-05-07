const LocalStorageService = () => {

  const save = (key, value) => {
    localStorage.setItem(key, value)
  }

  const open = (key) => {
    return localStorage.getItem(key)
  }

  const remove = (key) => {
    localStorage.removeItem(key)
  }

  const removeAll = () => {
    localStorage.clear()
  }

  return {
    save,
    open,
    remove,
    removeAll,
  }
}

export default LocalStorageService()