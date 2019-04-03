import React from 'react';
import {shallow, mount} from 'enzyme';
import {DeleteEncounterButton} from '../delete-encounter-button';
import {showDeleteEncounterForm} from '../../actions';

describe('<DeleteEncounterButton />', () => {
    it('Renders without crashing', () => {
        shallow(<DeleteEncounterButton />);
    });

    it('Should dispatch showDeleteEncounterForm on click', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<DeleteEncounterButton dispatch={dispatch} showDeleteEncounter={true} id={1}/>);
        wrapper.find('button').simulate('click');
        expect(dispatch).toHaveBeenCalledWith(showDeleteEncounterForm(false,1));
    })
});