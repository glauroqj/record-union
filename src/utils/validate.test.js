import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import { validate } from './validate'

const error = {
  emoji: '😀',
  characteres: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
  empty: ''
}

describe('Validate notes', () => {
  it('should return error emojis', () => {
    const test = validate(error.emoji)
    expect(test.errorbag[0]).toEqual('Error: Contains emojis')
  })
  it('should return error 100 limit characters', () => {
    const test = validate(error.characteres)
    expect(test.errorbag[0]).toEqual('Error: 100 max characters')
  })
  it('should return error empty note', () => {
    const test = validate(error.empty)
    expect(test.errorbag[0]).toEqual('Error: Empty note')
  })
})