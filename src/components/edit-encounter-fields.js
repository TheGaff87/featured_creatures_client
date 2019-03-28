import React from 'react';
import { connect } from 'react-redux';

export function EditEncounterFields(props) {
    if (props.editEncounterFields) {
    return (
        <div className='edit-encounter-fields'>
            <p className='must-enter-fields'>Please enter information you wish to change for at least one field.</p>
        </div>
    )
    } else {
        return null
    }
}

const mapStateToProps = state => ({
    editEncounterFields: state.editEncounterFields
  });
  
  export default connect(mapStateToProps)(EditEncounterFields);