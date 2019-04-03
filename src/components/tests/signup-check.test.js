import React from 'react';
import {shallow} from 'enzyme';
import {SignupCheck} from '../signup-check';

describe('<SignupCheck />', () => {
    it('Renders without crashing', () => {
        shallow(<SignupCheck showSignupCheck={true} />);
    });
});