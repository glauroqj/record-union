import {
  FETCH_LIST_STARTED,
  FETCH_LIST_DONE,
  FETCH_LIST_ERROR,
  LIST_UPDATE_STARTED,
  LIST_UPDATE_DONE,
  LIST_UPDATE_ERROR,
  ADD_NOTE_STARTED,
  ADD_NOTE_DONE,
  ADD_NOTE_ERROR
} from '../actions/noteActionsType'

const notes = (state, action) => {
  /** initial state */
  state = {
    list: []
  }

  switch (action.type) {
    case [FETCH_LIST_DONE]:
      return {
        ...state,
        list: action.list,
        loading: action.loading
      }
    case 'DELETE_NOTE':
      return {
        ...state,
        name: action.user.name,
        text: action.user.type,
        authenticaded: true
      }
    case 'LIST_NOTES':
      return {
        ...state,
        list: []
      }
    default:
      return state
  }
}

export default notes
