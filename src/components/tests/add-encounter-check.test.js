import React from 'react';
import {shallow, mount} from 'enzyme';
import {AddEncounterCheck} from '../add-encounter-check';
import {hideAddEncounterCheck} from '../../actions';

describe('<AddEncounterCheck />', () => {
    it('Renders without crashing', () => {
        shallow(<AddEncounterCheck showAddEncounterCheck={true} />);
    });

    it('Should dispatch hideAddEncounterCheck on click', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<AddEncounterCheck dispatch={dispatch} showAddEncounterCheck={true} />);
        wrapper.find('button').simulate('click');
        expect(dispatch).toHaveBeenCalledWith(hideAddEncounterCheck());
    })
});