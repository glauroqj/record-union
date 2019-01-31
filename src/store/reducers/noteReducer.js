import {
  FETCH_STATUS,
  ADD_STATUS,
  REMOVE_STATUS
} from '../actions/noteActionsType'

/** initial state */
const initialState = {
  list: [],
  listLoading: true
}

const notes = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATUS.FETCH_DONE:
    console.log('FETCH DONE: ', action)
      return {
        ...state,
        list: action.list,
        listLoading: false
      }
    case FETCH_STATUS.FETCH_EMPTY:
      return {
        ...state,
        listLoading: false
      }
    case ADD_STATUS.ADD_DONE:
      return {
        ...state,
        list: action.list
      }
    case REMOVE_STATUS.REMOVE_DONE:
      return {
        ...state,
        list: action.list
      }
    default:
      return state
  }
}

export default notes
