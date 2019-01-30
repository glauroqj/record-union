const fetchListStorage = async () => {
  return new Promise((resolve, reject) => {
    const serializedData = localStorage.getItem('quick-notes')
    if (serializedData === null) {
      /** return empty array */
      resolve(null)
    }
    resolve(JSON.parse(serializedData))
  })
}

const addNoteStorage = async text => {
  let storage = await fetchListStorage()
  console.log('STORAGE: ',storage)
  return new Promise((resolve, reject) => {
    if (storage) {
      storage = storage.concat(text)
    }
    if (!storage) {
      storage = [text]
    }
    const serializedData = JSON.stringify(storage)
    localStorage.setItem('quick-notes', serializedData)
    resolve(storage)
  })
}

const removeNoteStorage = async (id) => {
  let storage = await fetchListStorage()
  return new Promise((resolve, reject) => {
    if (storage) {
      console.log('STORAGE: ',storage)
      storage.splice(id, 1)
      console.log('Remove Note: ', storage)
    }
    const serializedData = JSON.stringify(storage)
    localStorage.setItem('quick-notes', serializedData)
    resolve(storage)
  })
}

export {
  fetchListStorage,
  addNoteStorage,
  removeNoteStorage
}
