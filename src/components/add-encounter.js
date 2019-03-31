import React from 'react';
import { connect } from 'react-redux';
import {addNewEncounter, showAddEncounterCheck} from '../actions';
import AddEncounterCheck from './add-encounter-check';

import './add-encounter.css'

export class AddEncounter extends React.Component {
    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.animal.value.slice(-1) === 's' && this.props.verifyAddEncounterCheck) {
            this.props.dispatch(showAddEncounterCheck());
        }else{
        const user = this.props.currentUser;
        const encounter = {
            animal: this.animal.value,
            encounterImage: this.encounterImage.value,
            encounterName: this.encounterName.value,
            encounterWebsite: this.encounterWebsite.value,
            zooName: this.zooName.value,
            zooLocation: this.zooLocation.value,
            zooWebsite: this.zooWebsite.value,
            encounterCost: this.encounterCost.value,
            encounterSchedule: this.encounterSchedule.value,
            encounterDescription: this.encounterDescription.value,
            addedBy: user
            };
        const token = this.props.authToken;
        this.props.dispatch(addNewEncounter(encounter, token));
        document.getElementsByClassName('add-encounter-form')[0].reset();
        }
    }

    render () {
    if (this.props.showAddEncounter) {
    return (
        <section className='add-encounter'>
            <form className='add-encounter-form' onSubmit={this.onSubmit}>
            <AddEncounterCheck />
            <label><span className='required'>Animal (required)</span>
                <input type='text' className='animal' placeholder= 'Use singular form of animal featured in this encounter' size='50'
                ref={input => (this.animal = input)} required />
            </label>
            <label><span className='required'>Encounter Name(required)</span>
                <input type='text' className='encounter-name' placeholder= 'Enter the encounter name' size='50'
                ref={input => (this.encounterName = input)} required/>
            </label>
            <label><span className='required'>Encounter Image(required)</span>
                <input type='text' className='encounter-image' placeholder= 'Enter the url for the encounter image' size='50'
                ref={input => (this.encounterImage = input)} required/>
            </label>
            <label><span className='required'>Encounter Website</span>
                <input type='text' className='encounter-website' placeholder= 'Enter the encounter website, if available' size='50'
                ref={input => (this.encounterWebsite = input)} />
            </label>
            <label><span className='required'>Zoo Name(required)</span>
                <input type='text' className='zoo-name' placeholder= 'Enter the zoo name' size='50'
                ref={input => (this.zooName = input)} required />
            </label>
            <label><span className='required'>Zoo Website(required)</span>
                <input type='text' className='zoo-website' placeholder= 'Enter the zoo website' size='50'
                ref={input => (this.zooWebsite = input)} required />
            </label>
            <label><span className='required'>Zoo Location(required)</span>
                <input type='text' className='zoo-location' placeholder= 'Ex: San Francisco, CA, USA or Sydney, Australia' size='50'
                ref={input => (this.zooLocation = input)} required />
            </label>
            <label><span className='required'>Encounter Cost(required)</span>
                <input type='text' className='encounter-cost' placeholder= 'Ex. $60 USD' size='50'
                ref={input => (this.encounterCost = input)} required />
            </label>
            <label><span className='required'>Encounter Schedule(required)</span>
                <input type='text' className='encounter-schedule' placeholder= 'Enter the encounter schedule' size='50'
                ref={input => (this.encounterSchedule = input)} required />
            </label>
            <label><span className='required'>Encounter Description (required)</span>
                <textarea className='encounter-description' placeholder='Enter short description of encounter. Do not include personal review of the experience.' rows='4' cols='40'
                ref={input => (this.encounterDescription = input)} required />
            </label>
            <button type="submit" className="submit-encounter" >Submit Encounter</button>
            </form>
        </section>
    )
    } else {
        return null
    }
}
}


const mapStateToProps = state => ({
    showAddEncounter: state.showAddEncounter,
    currentUser: state.currentUser,
    authToken: state.authToken,
    showAddEncounterCheck: state.showAddEncounterCheck,
    verifyAddEncounterCheck: state.verifyAddEncounterCheck
  });
  
  export default connect(mapStateToProps)(AddEncounter);