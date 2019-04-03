import React from 'react';
import {shallow} from 'enzyme';
import {AnimalDropdown} from '../animal-dropdown';

describe('<AnimalDropdown />', () => {
    it('Renders without crashing', () => {
        const animal = ['Kangaroo', 'Koala', 'Dolphin'];
        shallow(<AnimalDropdown animal={animal}/>);
    });
});