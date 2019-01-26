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
} from './noteActionsType'

import {
  fetchListAsync
} from '../middlewares/localStorage'

const fetchListStarted = () => ({
    type: FETCH_LIST_STARTED
})

const fetchListDone = payload => ({
  type: FETCH_LIST_DONE,
  payload
})

/** thunk */
const fetchInitialList = () => {
  return async (dispatch, getState) => {
    dispatch(fetchListStarted())
    /** async */
    const list = await fetchListAsync()
    if (list) {
      const payload = {
        list,
        loading: false
      }
      dispatch(fetchListDone(payload))
    }
  }
}

// const addNote = () => ({
//   type: 'ADD_NOTE'
// })

// const deleteNote = () => ({
//   type: 'DELETE_NOTE'
// })

// const errorNote = () => ({
//   type: 'ERROR_NOTE'
// })

// const listNotes = () => ({
//   type: 'LIST_NOTES'
// })

export {
  fetchInitialList
}