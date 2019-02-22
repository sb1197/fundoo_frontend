import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Login from '../../pages/LoginUI';
import  LoginComponent from '../../pages/LoginUI'

// describe what we are testing
describe('Login UI', () => {

  // make our assertion and what we expect to happen 
  it('should render without throwing an error', () => {
    expect(shallow(<Login />).exists()).toBe(true)
  })

  it('should render without throwing an error', () => {
    expect(shallow(<LoginComponent />).exists()).toBe(true)
  })

})