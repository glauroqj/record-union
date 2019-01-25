/** local storage */
import { loadList, saveNote, deleteNote } from './localStorage'

const notes = (state, action) => {
  /** initial state */
  state = {
    list: []
  }

  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        list: [...state.list, action.note.text],
        loading: action.note.loading
      }
    case 'DELETE_NOTE':
      return {
        ...state,
        name: action.user.name,
        text: action.user.type,
        authenticaded: true
      }
    case 'LIST_NOTES':
      const listUpdated = loadList()
      return {
        ...state,
        list: listUpdated
      }
    default:
      return state
  }
}

export default notes
