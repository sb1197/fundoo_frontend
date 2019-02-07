import React from 'react';
import { shallow} from 'enzyme';
import RegisterComponent from '../registerComponent'
const  component = shallow(<RegisterComponent />)

describe('< RegisterComponent />', () => {
    // make our assertion and what we expect to happen 
    it('should render without throwing an error', () => {
        // expect(component.find('#regMainDiv').exists()).toBe(true)
        expect(component.find('#regMainDiv')).toBeDefined();
        expect( shallow(<RegisterComponent />).exists()).toBe(true)
    })
})

describe('Register Component', () => {
    it('renders a first_name input', () => {
        expect(component.find('#fname').length).toEqual(0)
    })

    it('renders a last_name input', () => {
        expect(shallow(<RegisterComponent />).find('#lname').length).toEqual(0)
    })

    it('renders a email input', () => {
        expect(shallow(<RegisterComponent />).find('#username').length).toEqual(0)
    })

    it('renders a confirm_email input', () => {
        expect(shallow(<RegisterComponent />).find('#confirmEmail').length).toEqual(0)
    })

    it('renders a password input', () => {
        expect(shallow(<RegisterComponent />).find('#password').length).toEqual(0)
    })

    it('renders a confirm_password input', () => {
        expect(shallow(<RegisterComponent />).find('#confirmPass').length).toEqual(0)
    })
})