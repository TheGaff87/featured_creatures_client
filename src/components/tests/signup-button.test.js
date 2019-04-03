import React from 'react';
import {shallow, mount} from 'enzyme';
import {SignupButton} from '../signup-button';
import {showSignupForm} from '../../actions';

describe('<SignupButton />', () => {
    it('Renders without crashing', () => {
        shallow(<SignupButton isLoggedIn={false}/>);
    });

    it('Should dispatch showSignupForm on click', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<SignupButton dispatch={dispatch} isLoggedIn={false} showSignupForm={true}/>);
        wrapper.find('button').simulate('click');
        expect(dispatch).toHaveBeenCalledWith(showSignupForm(false));
    })
});