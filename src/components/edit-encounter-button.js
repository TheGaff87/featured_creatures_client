import React from 'react';
import { connect } from 'react-redux';
import {showEditEncounterForm} from '../actions';

export function EditEncounterButton(props) {

    const currentForm = props.id;

    function onClick(e) {
        if (props.showEditEncounter) {
            props.dispatch(showEditEncounterForm(false, currentForm));
        }else{
            props.dispatch(showEditEncounterForm(true, currentForm));
        }
    }

    return (
    <button type="button" className="edit-encounter-button" onClick={e => onClick(e)}>Edit this encounter</button>
    )
}   

const mapStateToProps = state => ({
    showEditEncounter: state.showEditEncounter
  });
  
  export default connect(mapStateToProps)(EditEncounterButton);