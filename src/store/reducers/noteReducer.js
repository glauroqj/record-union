import {
  FETCH_STATUS,
  ADD_STATUS,
  REMOVE_STATUS,
  UPDATE_STATUS
} from '../actions/noteActionsType'

/** initial state */
const initialState = {
  list: [],
  listLoading: true,
  btnLoading: false,
  updateList: false
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
    case REMOVE_STATUS.REMOVE_STARTED:
      return {
        ...state,
        list: action.list
      }
    case REMOVE_STATUS.REMOVE_DONE:
      return {
        ...state,
        list: action.list
      }
    case UPDATE_STATUS.UPDATE_STARTED:
      return {
        ...state,
        updateList: action.update
      }
    case UPDATE_STATUS.UPDATE_DONE:
      return {
        ...state,
        updateList: action.update
      }
    default:
      return state
  }
}

export default notes
