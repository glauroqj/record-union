import {
  FETCH_LIST_STARTED,
  FETCH_LIST_DONE,
  FETCH_LIST_ERROR,
  FETCH_LIST_DONE_EMPTY,
  ADD_NOTE_STARTED,
  ADD_NOTE_DONE,
  ADD_NOTE_ERROR,
  REMOVE_NOTE_STARTED,
  REMOVE_NOTE_DONE,
  REMOVE_NOTE_ERROR
} from './noteActionsType'

import {
  fetchListStorage,
  addNoteStorage,
  removeNoteStorage
} from '../middlewares/localStorage'

const fetchListStarted = () => ({
    type: FETCH_LIST_STARTED
})
const fetchListDone = list => ({
  type: FETCH_LIST_DONE,
  list
})
const fetchListError = () => ({
  type: FETCH_LIST_ERROR
})
const fetchListDoneEmpty = () => ({
  type: FETCH_LIST_DONE_EMPTY
})

const addNoteStarted = () => ({
  type: ADD_NOTE_STARTED
})
const addNoteDone = list => ({
  type: ADD_NOTE_DONE,
  list
})
const addNoteError = () => ({
  type: ADD_NOTE_ERROR
})

const removeNoteStarted = () => ({
  type: REMOVE_NOTE_STARTED
})
const removeNoteDone = () => ({
  type: REMOVE_NOTE_DONE
})
const removeNoteError = () => ({
  type: REMOVE_NOTE_ERROR
})

/** thunk */
const fetchInitialList = () => {
  return async (dispatch, getState) => {
    dispatch(fetchListStarted())
    /** async */
    const list = await fetchListStorage()
    console.log('Action:', list)
    if (list) dispatch(fetchListDone(list))
    if (!list) dispatch(fetchListDoneEmpty())
  }
}

const addNote = text => {
  return async (dispatch, getState) => {
    dispatch(addNoteStarted())
    /** async */
    const item = await addNoteStorage(text)
    if (item) {
      console.log('Response ADD NOTE: ',item)
      dispatch(addNoteDone(item))
    }
    // if (item) {
    //   const payload = {
    //     list,
    //     listLoading: false
    //   }
    //   dispatch(fetchListDone(payload))
    // }
  }
}

export {
  fetchInitialList,
  addNote,
  removeNote
}