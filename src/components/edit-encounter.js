import React from 'react';
import { connect } from 'react-redux';
import {editEncounter} from '../actions';
import {editEncounterFields} from '../actions';

export class EditEncounter extends React.Component {
    constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        const id = this.props.encounterId;
        if (this.encounterCost.value !== '' ||this.encounterSchedule.value !== '' || this.encounterDescription.value !== '') {
            const encounter = {}
            if (this.encounterCost.value !== '') {
                encounter['encounterCost'] = this.encounterCost.value
            }
            if (this.encounterSchedule.value !== '') {
                encounter['encounterSchedule'] = this.encounterSchedule.value
            }
            if (this.encounterDescription.value !== '') {
                encounter['encounterDescription'] = this.encounterDescription.value
            }
            const token = this.props.authToken;
            this.props.dispatch(editEncounter(encounter, token, id));
            document.getElementsByClassName('edit-encounter-form')[0].reset();
        }else{
            this.props.dispatch(editEncounterFields());
        } 
    }

    render () {
    if (this.props.showEditEncounter && this.props.currentEditForm===this.props.id) {
    return (
        <section className='edit-encounter-section'>
            <form action='/api/users/' method='post' className='edit-encounter-form'>
            <label><span className='required'>Encounter Cost</span>
                <input type='text' className='encounter-cost' placeholder= 'Enter updated encounter cost' size='50'
                ref={input => (this.encounterCost = input)} />
            </label>
            <label><span className='required'>Encounter Schedule</span>
                <input type='text' className='encounter-schedule' placeholder= 'Enter updated encounter schedule' size='50'
                ref={input => (this.encounterSchedule = input)} />
            </label>
            <label><span className='required'>Encounter Description</span>
                <textarea className='encounter-description' placeholder='Enter updated encounter description. Do not include personal review of the experience.' rows='4' cols='40'
                ref={input => (this.encounterDescription = input)} />
            </label>
            <button type="submit" className="edit-submit" onClick={this.onClick}>Submit encounter changes</button>
            </form>
        </section>
    )
    } else {
        return null
    }
}
}

const mapStateToProps = state => ({
    showEditEncounter: state.showEditEncounter,
    authToken: state.authToken,
    currentEditForm: state.currentEditForm
  });
  
  export default connect(mapStateToProps)(EditEncounter);