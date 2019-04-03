import React from 'react';
import {shallow} from 'enzyme';
import {EditEncounter} from '../edit-encounter';

describe('<EditEncounter />', () => {
    it('Renders without crashing', () => {
        shallow(<EditEncounter showEditEncounter={true} currentEditForm={1} id={1} />);
    });
});