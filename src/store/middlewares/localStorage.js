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
  console.log('STORAGE: ',storage)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (storage) {
          const note = validate(text)
          storage = storage.concat(note)
          console.log('ADD NOTE VALIDATION: ', storage)
        }
        if (!storage) {
          storage = [validate(text)]
          console.log('ADD NOTE VALIDATION: ', storage)
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
        console.log('STORAGE: ',storage)
        storage.splice(id, 1)
        console.log('Remove Note: ', storage)
      }
      const serializedData = JSON.stringify(storage)
      localStorage.setItem('quick-notes', serializedData)
      resolve(storage)
    }, 2000)
  })
}

export {
  fetchListStorage,
  addNoteStorage,
  removeNoteStorage
}
