import React from 'react';
import {shallow} from 'enzyme';
import {AddEncounter} from '../add-encounter';

describe('<AddEncounter />', () => {
    it('Renders without crashing', () => {
        shallow(<AddEncounter showAddEncounter={true} />);
    });
});