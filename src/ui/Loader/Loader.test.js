import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import { Loader } from './'

describe('Loader component', () => {
  it('should render', () => {
    const component = shallow(<Loader size={10} color="#ffffff" />)
    expect(component.length).toBe(1)
  })
  it('should show text loader', () => {
    const component = shallow(<Loader text="Loading..." size={10} color="#ffffff" />)
    expect(component.find('span').text()).toEqual('Loading...')
  })
})