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
    console.log('REDUCER: ', state, action)
      return {
        ...state,
        list: action.list,
        listLoading: false
      }
    case ADD_STATUS.ADD_DONE:
      return {
        ...state,
        list: action.list
      }
    default:
      return state
  }
}

export default notes
