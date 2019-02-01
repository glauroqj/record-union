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
    setTimeout(() => {
        if (storage) {
          const note = validate(text)
          storage = storage.concat(note)
        }
        if (!storage) {
          storage = [validate(text)]
        }
        const serializedData = JSON.stringify(storage)
        localStorage.setItem('quick-notes', serializedData)
        resolve(storage)
    }, 1000)
  })
}

const removeNoteStorage = async (id) => {
  let storage = await fetchListStorage()
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (storage) {
        storage = storage.filter((item, index) => index !== id[0])
        const serializedData = JSON.stringify(storage)
        localStorage.setItem('quick-notes', serializedData)
        resolve({ storage, id })
      }
      if (!storage) resolve([])
    }, 2000)
  })
}

export {
  fetchListStorage,
  addNoteStorage,
  removeNoteStorage
}
