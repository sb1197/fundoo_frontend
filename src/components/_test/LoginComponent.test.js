import React from 'react';
import { shallow} from 'enzyme';
import LoginComponent from '../loginComponent'

describe('Login Component', () => {
    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
        expect(shallow(<LoginComponent />).exists()).toBe(true)
    })
})

describe('Login Component', () => {
    it('renders a email input', () => {
        expect(shallow(<LoginComponent />).find('#username').length).toEqual(0)
    })
})

describe('LoginComponent', () => {
    it('renders a password input', () => {
        expect(shallow(<LoginComponent />).find('#password').length).toEqual(0)
    })
})

// within the Login components describe function
// describe('Email input', () => {
//     it('should respond to change event and change the state of the Login Component', () => { 
//      const wrapper = shallow(<LoginComponent />);
//      wrapper.find('#username').simulate('onChange', {target: {name: 'username', value: 'blah@gmail.com'}});
//     expect(wrapper.state('username')).toEqual('blah@gmail.com');
//     })
//    })
   
//    describe('Password input', () => {  
//     it('should respond to change event and change the state of the Login Component', () => {   
//      const wrapper = shallow(<LoginComponent />);
//      wrapper.find('#password').simulate('onChange', {target: {name: 'password', value: 'cats'}}); 
//      expect(wrapper.state('password')).toEqual('cats');
//     })
//    })