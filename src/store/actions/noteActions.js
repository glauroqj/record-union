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
const removeNoteDone = () => ({
  type: REMOVE_STATUS.REMOVE_DONE
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