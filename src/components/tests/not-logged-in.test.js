import React from 'react';
import {shallow} from 'enzyme';
import NotLoggedIn from '../not-logged-in';

describe('<NotLoggedIn />', () => {
    it('Renders without crashing', () => {
        shallow(<NotLoggedIn isLoggedIn={false} />);
    });
});