const LocalStorageService = () => {

  const save = (key, value) => {
    try {
      localStorage.setItem(key, value)
    } catch (e) {
      alert('O armazenamento do seu navegador está cheio, por favor salve alguns perfis e feche-os.')
    }
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