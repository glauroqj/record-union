import {
  FETCH_STATUS,
  ADD_STATUS,
  REMOVE_STATUS,
  UPDATE_STATUS
} from '../actions/noteActionsType'

import reducer from './noteReducer'

const initialState = {
  list: [],
  remove: [],
  listLoading: true,
  btnLoading: false,
  updateList: false
}

describe('Reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
  it('should start fetch list', () => {
    expect(
      reducer(initialState, {
        type: FETCH_STATUS.FETCH_DONE,
        list: [{ id: 'hash', text: 'quick note', errorbag: [] }],
        loading: false
      })
    ).toEqual({
      list: [{ id: 'hash', text: 'quick note', errorbag: [] }],
      remove: [],
      listLoading: false,
      btnLoading: false,
      updateList: false
    })
  })
  it('should fetch empty list', () => {
    expect(
      reducer(initialState, {
        type: FETCH_STATUS.FETCH_EMPTY,
        list: [],
        loading: false
      })
    ).toEqual({
      list: [],
      remove: [],
      listLoading: false,
      btnLoading: false,
      updateList: false
    })
  })
  it('should start add note', () => {
    expect(
      reducer(initialState, {
        type: ADD_STATUS.ADD_STARTED,
        loading: true,
        remove: []
      })
    ).toEqual({
      list: [],
      remove: [],
      listLoading: true,
      btnLoading: true,
      updateList: false
    })
  })
  it('should add note done', () => {
    expect(
      reducer(initialState, {
        type: ADD_STATUS.ADD_DONE,
        list: [{ id: 'hash', text: 'quick note', errorbag: [] }],
        loading: false
      })
    ).toEqual({
      list: [{ id: 'hash', text: 'quick note', errorbag: [] }],
      remove: [],
      listLoading: true,
      btnLoading: false,
      updateList: false
    })
  })
  it('should start remove note', () => {
    expect(
      reducer(initialState, {
        type: REMOVE_STATUS.REMOVE_STARTED,
        id: 'hash'
      })
    ).toEqual({
      list: [],
      remove: ['hash'],
      listLoading: true,
      btnLoading: false,
      updateList: false
    })
  })
  it('should remove note done', () => {
    expect(
      reducer(initialState, {
        type: REMOVE_STATUS.REMOVE_DONE,
        list: [],
        loading: false
      })
    ).toEqual({
      list: [],
      remove: [],
      listLoading: true,
      btnLoading: false,
      updateList: false
    })
  })
  it('should notify update list started', () => {
    expect(
      reducer(initialState, {
        type: UPDATE_STATUS.UPDATE_STARTED,
        update: true
      })
    ).toEqual({
      list: [],
      remove: [],
      listLoading: true,
      btnLoading: false,
      updateList: true
    })
  })
  it('should notify update list started', () => {
    expect(
      reducer(initialState, {
        type: UPDATE_STATUS.UPDATE_DONE,
        update: false
      })
    ).toEqual({
      list: [],
      remove: [],
      listLoading: true,
      btnLoading: false,
      updateList: false
    })
  })
})