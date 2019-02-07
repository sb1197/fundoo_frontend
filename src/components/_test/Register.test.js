import React from 'react';
import { shallow } from 'enzyme';
import Register from '../../pages/RegisterUI'
import  RegisterComponent from '../../pages/RegisterUI'
const  component = shallow(<Register />)
// describe what we are testing
describe('<Register /> UI', () => {

  // make our assertion and what we expect to happen 
  it('should render when form exists without throwing an error', () => {
    expect(component.find('#regForm')).toBeDefined();
    expect(component.find('#regForm').exists()).toBe(true)
  })

  it('should render Register_Component without throwing an error', () => {
    expect(shallow(<RegisterComponent />).exists()).toBe(true)
  })

  it('should shallow correctly',() => {
    expect(component);
  })

  it('should match to snapshot',() => {
    expect(component).toMatchSnapshot()
  })

})

