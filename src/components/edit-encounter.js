import React from 'react';
import { connect } from 'react-redux';

import TextInput from './text-input';
import TextareaInput from './textarea-input';

export  function EditEncounter(props) {
    if (props.showEditEncounter) {
    return (
        <section className='edit-encounter-section'>
            <form action='/api/users/' method='post' className='edit-encounter-form'>
            <TextInput field='Encounter Cost' className='encounter-cost-edit' placeholder='Enter updated encounter cost' />
            <TextInput field='Encounter Schedule' className='encounter-schedule-edit' placeholder='Enter updated encounter schedule' />
            <TextareaInput field='Encounter Description' className='encounter-description-edit' placeholder='Enter updated encounter description. Do not enter personal review of encounter.' />
            <button type="submit" className="edit-submit">Submit encounter changes</button>
            </form>
        </section>
    )
    } else {
        return null
    }
}

const mapStateToProps = state => ({
    showEditEncounter: state.showEditEncounter
  });
  
  export default connect(mapStateToProps)(EditEncounter);