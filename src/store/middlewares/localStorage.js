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

const removeNoteStorage = async list => {
  // let storage = await fetchListStorage()
  return new Promise((resolve, reject) => {
    setTimeout( async () => {
      list = list.filter(item => (item.remove !== true))
      const serializedData = JSON.stringify(list)
      localStorage.setItem('quick-notes', serializedData)
      const updatedList = await fetchListStorage()
      resolve(updatedList)
    }, 6000)
    // if (storage) {
    // }
    // if (!storage) resolve([])
  })
}

// const updateListRemove = async list => {
//   // let storage = await fetchListStorage()
//   return new Promise( async (resolve) => {
//     if (list) {
//       // storage = storage.map((item, index) => {
//       //   if (index === id) {
//       //     return {...item, remove: true}
//       //   }
//       //   return item
//       // })
//       const removeNote = await removeNoteStorage(list)
//       const serializedData = JSON.stringify(removeNote)
//       localStorage.setItem('quick-notes', serializedData)
//       console.log(removeNote)
//       // resolve(storage)
//     }
//     if (!list) resolve([])
//   })
// }

export {
  fetchListStorage,
  addNoteStorage,
  removeNoteStorage,
  updateListRemove
}
