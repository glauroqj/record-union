import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

import { Button } from './'

describe('Button component', () => {
  it('should render', () => {
    const callback = jest.fn()
    const component = shallow(<Button type="remove" click={callback} loading={false} />)
    expect(component.length).toBe(1)
  })
  it('should be type send', () => {
    const callback = jest.fn()
    const component = shallow(<Button type="send" click={callback} loading={false} />)
    expect(component.find('.send').length).toEqual(1)
  })
  it('should be type balloon', () => {
    const callback = jest.fn()
    const component = shallow(<Button type="balloon" totalNotes={10} click={callback} loading={false} />)
    expect(component.find('.balloon').length).toEqual(1)
  })
  it('should show loading', () => {
    const callback = jest.fn()
    const component = shallow(<Button type="balloon" click={callback} loading={true} />)
    expect(component.find('.disabled').length).toEqual(1)
  })
})