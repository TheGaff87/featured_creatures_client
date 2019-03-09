import React from 'react';
import { connect } from 'react-redux';

export function AddEncounterButton(props) {
    if (props.isLoggedIn) {
    return (
    <button type="button" className="add-encounter-button">
    Add Encounter
    </button>
    )
    } else {
        return null
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
  });
  
  export default connect(mapStateToProps)(AddEncounterButton);