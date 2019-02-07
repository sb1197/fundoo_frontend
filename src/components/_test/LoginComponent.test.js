import React from 'react';
import { shallow } from 'enzyme';
import LoginComponent from '../loginComponent'
const  component = shallow(<LoginComponent />)
describe('Login Component', () => {
    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
        expect(component.find('#loginForm')).toBeDefined();
        expect(shallow(<LoginComponent />).exists()).toBe(true)
    })
})

describe('<LoginComponent />', () => {
    it('renders an email input', () => {
        expect(component.find('#username').length).toEqual(1);
        // expect(wrapper.find(Foo)).to.have.lengthOf(3);
    })

    it('renders a password input', () => {
        expect(component.find('#password').length).toEqual(1)
    })
})

// within the Login components describe function
describe('Email input', () => {
    it('should respond to change event and change the state of the Login Component', () => { 
     const form = component.find('#username');
     form.props().onChange({
        target: {
            name: 'username', 
            value: 'blah@gmail.com'
        }
     });
    //  wrapper.find('#username').simulate('onChange', {target: {name: 'username', value: 'blah@gmail.com'}});
    expect(component.state('username')).toEqual('blah@gmail.com');
    })
   })
   
//    describe('Password input', () => {  
//     it('should respond to change event and change the state of the Login Component', () => {   
//      const wrapper = shallow(<LoginComponent />);
//      wrapper.find('#password').simulate('onChange', {target: {name: 'password', value: 'cats'}}); 
//      expect(wrapper.state('password')).toEqual('cats');
//     })
//    })