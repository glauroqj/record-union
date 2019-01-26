const fetchListAsync = () => {
  return new Promise((resolve, reject) => {
    const serializedState = localStorage.getItem('list')
    if (serializedState === null) {
      /** return empty array */
      resolve([])
    }
    resolve(JSON.parse(serializedState))
  })
}

// const saveNote = ({ dispatch, getState }) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('list', serializedState);
//   } catch (err) {
//     // die
//   }
// }

// const eraseNote = ({ dispatch, getState }) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('list', serializedState);
//   } catch (err) {
//     // die
//   }
// }

export {
  fetchListAsync
}
