import React from 'react';
import {shallow} from 'enzyme';
import {Signin} from '../signin';

describe('<Signin />', () => {
    it('Renders without crashing', () => {
        shallow(<Signin showSigninForm={true} />);
    });
});