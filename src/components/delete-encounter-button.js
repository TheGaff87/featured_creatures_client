import React from 'react';
import { connect } from 'react-redux';
import {showDeleteEncounterForm} from '../actions';

export function DeleteEncounterButton(props) {

    const currentForm = props.id;

    function onClick(e) {
        if (props.showDeleteEncounter) {
            props.dispatch(showDeleteEncounterForm(false, currentForm));
        }else{
            props.dispatch(showDeleteEncounterForm(true, currentForm));
        }
    }

    return (
    <button type="button" className="add-encounter-button" onClick={e => onClick(e)}>Delete this encounter</button>
    )
}   

const mapStateToProps = state => ({
    showDeleteEncounter: state.showDeleteEncounter
  });
  
  export default connect(mapStateToProps)(DeleteEncounterButton);