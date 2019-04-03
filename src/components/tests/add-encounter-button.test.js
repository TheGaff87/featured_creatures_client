import React from 'react';
import {shallow, mount} from 'enzyme';
import {AddEncounterButton} from '../add-encounter-button';
import {showAddEncounterForm} from '../../actions';

describe('<AddEncounterButton />', () => {
    it('Renders without crashing', () => {
        shallow(<AddEncounterButton isLoggedIn={true}/>);
    });

    it('Should dispatch showAddEncounterForm on click', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<AddEncounterButton dispatch={dispatch} isLoggedIn={true} showAddEncounter={true} />);
        wrapper.find('button').simulate('click');
        expect(dispatch).toHaveBeenCalledWith(showAddEncounterForm(false));
    })
});