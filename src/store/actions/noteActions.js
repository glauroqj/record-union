import {
  FETCH_STATUS,
  ADD_STATUS,
  REMOVE_STATUS
} from './noteActionsType'

import {
  fetchListStorage,
  addNoteStorage,
  removeNoteStorage
} from '../middlewares/localStorage'

const fetchListStarted = () => ({
    type: FETCH_STATUS.FETCH_STARTED
})
const fetchListDone = list => ({
  type: FETCH_STATUS.FETCH_DONE,
  list
})
const fetchListError = () => ({
  type: FETCH_STATUS.FETCH_ERROR
})
const fetchListDoneEmpty = () => ({
  type: FETCH_STATUS.FETCH_EMPTY
})

const addNoteStarted = () => ({
  type: ADD_STATUS.ADD_STARTED
})
const addNoteDone = list => ({
  type: ADD_STATUS.ADD_DONE,
  list
})
const addNoteError = () => ({
  type: ADD_STATUS.ADD_ERROR
})

const removeNoteStarted = () => ({
  type: REMOVE_STATUS.REMOVE_STARTED
})
const removeNoteDone = list => ({
  type: REMOVE_STATUS.REMOVE_DONE,
  list
})
const removeNoteError = () => ({
  type: REMOVE_STATUS.REMOVE_ERROR
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
    const newList = await addNoteStorage(text)
    if (newList) {
      console.log('Response ADD NOTE: ',newList)
      dispatch(addNoteDone(newList))
    }
    if (!newList) {
      dispatch(addNoteError())
    }
  }
}

const removeNote = id => {
  return async (dispatch, getState) => {
    dispatch(removeNoteStarted())
    const newList = await removeNoteStorage(id)
    if (newList) {
      console.log('Response REMOVE NOTE: ', newList)
      dispatch(removeNoteDone(newList))
    }
    if (!newList) {
      dispatch(removeNoteError())
    }
  }
}

export {
  fetchInitialList,
  addNote,
  removeNote
}