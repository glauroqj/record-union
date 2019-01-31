import {
  FETCH_STATUS,
  ADD_STATUS,
  REMOVE_STATUS
} from '../actions/noteActionsType'

/** initial state */
const initialState = {
  list: [],
  listLoading: true,
  btnLoading: false
}

const notes = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATUS.FETCH_DONE:
    console.log('FETCH DONE: ', action)
      return {
        ...state,
        list: action.list,
        listLoading: action.loading
      }
    case FETCH_STATUS.FETCH_EMPTY:
      return {
        ...state,
        listLoading: action.loading
      }
    case ADD_STATUS.ADD_STARTED:
      return {
        ...state,
        btnLoading: action.loading
    }
    case ADD_STATUS.ADD_DONE:
      return {
        ...state,
        list: action.list,
        btnLoading: action.loading
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
