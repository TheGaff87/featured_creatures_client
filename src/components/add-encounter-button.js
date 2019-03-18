import React from 'react';
import { connect } from 'react-redux';
import {showAddEncounterForm} from '../actions';

export function AddEncounterButton(props) {

    function onClick(e) {
        if (props.showAddEncounter) {
            props.dispatch(showAddEncounterForm(false));
        }else{
            props.dispatch(showAddEncounterForm(true));
        }
    }

    if (props.isLoggedIn) {
    return (
    <button type="button" className="add-encounter-button" onClick={e => onClick(e)}>Add a new encounter</button>
    )
    } else {
        return null
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn,
    showAddEncounter: state.showAddEncounter
  });
  
  export default connect(mapStateToProps)(AddEncounterButton);