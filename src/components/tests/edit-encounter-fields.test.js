import React from 'react';
import {shallow} from 'enzyme';
import {EditEncounterFields} from '../edit-encounter-fields';

describe('<EditEncounterFields />', () => {
    it('Renders without crashing', () => {
        shallow(<EditEncounterFields editEncounterFields={true} />);
    });
});