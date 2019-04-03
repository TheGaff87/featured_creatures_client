import React from 'react';
import {shallow} from 'enzyme';
import {LoggedIn} from '../logged-in';

describe('<LoggedIn />', () => {
    it('Renders without crashing', () => {
        shallow(<LoggedIn isLoggedIn={true} />);
    });
});