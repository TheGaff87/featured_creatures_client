import React from 'react';
import {shallow} from 'enzyme';
import {DeleteEncounter} from '../delete-encounter';

describe('DeleteEncounter />', () => {
    it('Renders without crashing', () => {
        shallow(<DeleteEncounter />);
    });
});