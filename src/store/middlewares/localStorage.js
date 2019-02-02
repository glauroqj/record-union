import { validate } from '../../utils/validate'

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
  return new Promise((resolve, reject) => {
      if (storage) {
        const note = validate(text)
        storage = storage.concat(note)
      }
      if (!storage) {
        storage = [validate(text)]
      }
      const serializedData = JSON.stringify(storage)
      localStorage.setItem('quick-notes', serializedData)
      setTimeout(() => {
        resolve(storage)
      }, 1000)
  })
}

const removeNoteStorage = async id => {
  let storage = await fetchListStorage()
  return new Promise((resolve, reject) => {
    if (storage) {
      storage = storage.filter(item => (item.id !== id))
      const serializedData = JSON.stringify(storage)
      localStorage.setItem('quick-notes', serializedData)
      setTimeout( async () => {
        resolve(storage)
      }, 2000)
    }
    if (!storage) resolve([])
  })
}

export {
  fetchListStorage,
  addNoteStorage,
  removeNoteStorage,
  updateListRemove
}
