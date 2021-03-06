import {
  FETCH_STATUS,
  ADD_STATUS,
  REMOVE_STATUS,
  UPDATE_STATUS
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
  list,
  loading: false
})
const fetchListError = () => ({
  type: FETCH_STATUS.FETCH_ERROR
})
const fetchListDoneEmpty = () => ({
  type: FETCH_STATUS.FETCH_EMPTY,
  loading: false
})

const addNoteStarted = () => ({
  type: ADD_STATUS.ADD_STARTED,
  loading: true,
  remove: []
})
const addNoteDone = list => ({
  type: ADD_STATUS.ADD_DONE,
  list,
  loading: false
})
const addNoteError = () => ({
  type: ADD_STATUS.ADD_ERROR,
  loading: false
})

const removeNoteStarted = (id) => ({
  type: REMOVE_STATUS.REMOVE_STARTED,
  id
})
const removeNoteDone = list => ({
  type: REMOVE_STATUS.REMOVE_DONE,
  list
})
const removeNoteError = () => ({
  type: REMOVE_STATUS.REMOVE_ERROR
})

const updateListStarted = () => ({
  type: UPDATE_STATUS.UPDATE_STARTED,
  update: true
})
const updateListDone = () => ({
  type: UPDATE_STATUS.UPDATE_DONE,
  update: false
})

/** thunk */
const fetchInitialList = () => {
  return async (dispatch, getState) => {
    dispatch(fetchListStarted())
    /** async */
    const list = await fetchListStorage()
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
      dispatch(addNoteDone(newList))
      dispatch(updateListStarted())
    }
    if (!newList) {
      dispatch(addNoteError())
      dispatch(updateListDone())
    }
  }
}

const removeNote = id => {
  return async (dispatch, getState) => {
    /* add note remove queue */
    dispatch(removeNoteStarted(id))
    const newList = await removeNoteStorage(id)
    if (newList) {
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
  removeNote,
  updateListStarted,
  updateListDone,
  fetchListStarted,
  fetchListDone,
  fetchListDoneEmpty,
  fetchListError,
  addNoteStarted,
  addNoteDone,
  addNoteError,
  removeNoteStarted,
  removeNoteDone,
  removeNoteError
}