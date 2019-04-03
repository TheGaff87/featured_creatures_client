import React from 'react';
import {shallow, mount} from 'enzyme';
import {EditEncounterButton} from '../edit-encounter-button';
import {showEditEncounterForm} from '../../actions';

describe('<EditEncounterButton />', () => {
    it('Renders without crashing', () => {
        shallow(<EditEncounterButton />);
    });

    it('Should dispatch showEditEncounterForm on click', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<EditEncounterButton dispatch={dispatch} showEditEncounter={true} id={1}/>);
        wrapper.find('button').simulate('click');
        expect(dispatch).toHaveBeenCalledWith(showEditEncounterForm(false, 1));
    })
});