import {
  FETCH_LIST_STARTED,
  FETCH_LIST_DONE,
  FETCH_LIST_ERROR,
  LIST_UPDATE_STARTED,
  LIST_UPDATE_DONE,
  LIST_UPDATE_ERROR,
  ADD_NOTE_STARTED,
  ADD_NOTE_DONE,
  ADD_NOTE_ERROR,
  REMOVE_NOTE_STARTED,
  REMOVE_NOTE_DONE,
  REMOVE_NOTE_ERROR
} from '../actions/noteActionsType'

/** initial state */
const initialState = {
  list: [],
  listLoading: true
}

const notes = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_DONE:
    console.log('REDUCER: ', state, action)
      return {
        ...state,
        list: action.list
      }
    case ADD_NOTE_DONE:
      return {
        ...state,
        list: action.list
      }
    default:
      return state
  }
}

export default notes
