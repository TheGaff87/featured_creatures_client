import React from 'react';
import {shallow} from 'enzyme';
import {Main} from '../main';

describe('<Main />', () => {
    it('Renders without crashing', () => {
        shallow(<Main isLoggedIn={true} />);
    });
});