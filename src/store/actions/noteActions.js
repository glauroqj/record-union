const addNote = note => ({
  type: 'ADD_NOTE',
  note
})

const deleteNote = id => ({
  type: 'DELETE_NOTE',
  id
})

const listNotes = list => ({
  type: 'LIST_NOTES',
  list
})

export {
  addNote,
  deleteNote,
  listNotes
}