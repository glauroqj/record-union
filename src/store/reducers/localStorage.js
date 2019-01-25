const loadList = () => {
  try {
    const serializedState = localStorage.getItem('list')
    if (serializedState === null) {
      /** return empty array */
      return []
    }
    return JSON.parse(serializedState)
  }
  catch(err) {
    return []
  }
}

const saveNote = (list) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('list', serializedState);
  } catch (err) {
    // die
  }
}

const deleteNote = (list) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('list', serializedState);
  } catch (err) {
    // die
  }
}

export {
  loadList,
  saveNote,
  deleteNote
}
