import React from 'react';
import {shallow, mount} from 'enzyme';
import {SigninButton} from '../signin-button';
import {showSigninForm} from '../../actions';

describe('<SigninButton />', () => {
    it('Renders without crashing', () => {
        shallow(<SigninButton isLoggedIn={false}/>);
    });

    it('Should dispatch showSigninForm on click', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<SigninButton dispatch={dispatch} isLoggedIn={false} showSigninForm={true}/>);
        wrapper.find('button').simulate('click');
        expect(dispatch).toHaveBeenCalledWith(showSigninForm(false));
    })
});