import React from 'react';
import {shallow} from 'enzyme';
import {SigninCheck} from '../signin-check';

describe('<SigninCheck />', () => {
    it('Renders without crashing', () => {
        shallow(<SigninCheck showSigninCheck={true} />);
    });
});