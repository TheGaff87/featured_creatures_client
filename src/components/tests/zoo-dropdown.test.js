import React from 'react';
import {shallow} from 'enzyme';
import {ZooDropdown} from '../zoo-dropdown';

describe('<ZooDropdown />', () => {
    it('Renders without crashing', () => {
        const zoo = ['Bronx Zoo', 'SeaWorld San Diego', 'Melbourne Zoo'];
        shallow(<ZooDropdown zoo={zoo}/>);
    });
});