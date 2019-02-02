import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import { ErrorBag } from './'

const errors = ['Error: Emoji']

describe('ErrorBag component', () => {
  it('should render', () => {
    const component = shallow(<ErrorBag errorbag={errors} />)
    expect(component.length).toBe(1)
  })
})