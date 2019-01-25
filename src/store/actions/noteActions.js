const addNote = note => ({
  type: 'ADD_NOTE',
  note
})

const deleteNote = id => ({
  type: 'DELETE_NOTE',
  id
})

const listNotes = () => ({
  type: 'LIST_NOTES'
})

export {
  addNote,
  deleteNote,
  listNotes
}