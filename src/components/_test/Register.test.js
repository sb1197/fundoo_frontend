import React from 'react';
import { shallow } from 'enzyme';
import Register from '../../pages/RegisterUI'
import  RegisterComponent from '../../pages/RegisterUI'

// describe what we are testing
describe('Register UI', () => {

  // make our assertion and what we expect to happen 
  it('should render without throwing an error', () => {
    expect(shallow(<Register />).exists()).toBe(true)
  })

  it('should render without throwing an error', () => {
    expect(shallow(<RegisterComponent />).exists()).toBe(true)
  })
})
