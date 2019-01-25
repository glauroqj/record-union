const notes = (state, action) => {
  state = {
    loading: true,
    list: []
  }
  console.log('Reducer: ', action)
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,
        list: [...state.list, action.note.text],
        loading: action.note.loading
      }
    case 'DELETE_NOTE':
      return {
        ...state,
        name: action.user.name,
        text: action.user.type,
        authenticaded: true
      }
    case 'LIST_NOTES':
      return {
        ...state,
        list: action.list
      }
    default:
      return state
  }
}

export default notes
