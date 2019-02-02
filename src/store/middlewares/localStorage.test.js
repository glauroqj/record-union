import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import {
  fetchListStorage,
  addNoteStorage,
  removeNoteStorage
} from './localStorage'

describe('Local Storage methods', () => {
  let noteID = ''
  it('should fetch empty list', async () => {
    const response = await fetchListStorage()
    expect(response).toEqual(null)
  })
  it('should add note', async () => {
    const response = await addNoteStorage('quick note')
    noteID = response[0].id
    expect(response[0].text).toEqual('quick note')
  })
  it('should fetch notes list', async () => {
    const response = await fetchListStorage()
    expect(response.length).toEqual(1)
  })
  it('should remove note', async () => {
    const response = await removeNoteStorage(noteID)
    expect(response).toEqual([])
  })
})