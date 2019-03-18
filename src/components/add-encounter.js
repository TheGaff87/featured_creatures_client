import React from 'react';
import { connect } from 'react-redux';
import './add-encounter.css'

export function AddEncounter(props) {

    function onClick(e) {
        e.preventDefault();
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
            addedBy: props.currentUser
            };
        this.props.dispatch(addNewEncounter(encounter));
        document.getElementsByClassName('add-encounter-form')[0].reset();
    }


    if (props.showAddEncounter) {
    return (
        <section className='add-encounter'>
            <form className='add-encounter-form'>
            <label><span className='required'>Animal (required)</span>
                <input type='text' className='animal' placeholder= 'Enter animal featured in this encounter' size='50'
                ref={input => (this.animal = input)} />
            </label>
            <label><span className='required'>Encounter Name(required)</span>
                <input type='text' className='encounter-name' placeholder= 'Enter the encounter name' size='50'
                ref={input => (this.encounterName = input)} />
            </label>
            <label><span className='required'>Encounter Image(required)</span>
                <input type='text' className='encounter-image' placeholder= 'Enter the url for the encounter image' size='50'
                ref={input => (this.encounterImage = input)} />
            </label>
            <label><span className='required'>Encounter Website</span>
                <input type='text' className='encounter-website' placeholder= 'Enter the encounter website, if available' size='50'
                ref={input => (this.encounterWebsite = input)} />
            </label>
            <label><span className='required'>Zoo Name(required)</span>
                <input type='text' className='zoo-name' placeholder= 'Enter the zoo name' size='50'
                ref={input => (this.zooName = input)} />
            </label>
            <label><span className='required'>Zoo Website(required)</span>
                <input type='text' className='zoo-website' placeholder= 'Enter the zoo website' size='50'
                ref={input => (this.zooWebsite = input)} />
            </label>
            <label><span className='required'>Zoo Location(required)</span>
                <input type='text' className='zoo-location' placeholder= 'Ex: San Francisco, CA, USA or Sydney, Australia' size='50'
                ref={input => (this.zooLocation = input)} />
            </label>
            <label><span className='required'>Encounter Cost(required)</span>
                <input type='text' className='encounter-cost' placeholder= 'Ex. $60 USD' size='50'
                ref={input => (this.encounterCost = input)} />
            </label>
            <label><span className='required'>Encounter Schedule(required)</span>
                <input type='text' className='encounter-schedule' placeholder= 'Enter the encounter schedule' size='50'
                ref={input => (this.encounterSchedule = input)} />
            </label>
            <label><span className='required'>Encounter Cost(required)</span>
                <input type='textarea' className='encounter-description' placeholder='Enter short description of encounter. Do not include personal review of the experience.' size='50'
                ref={input => (this.encounterDescription = input)} />
            </label>
            <button type="submit" className="submit-encounter" onClick={e => onClick(e)}>Submit Encounter</button>
            </form>
        </section>
    )
    } else {
        return null
    }
}

const mapStateToProps = state => ({
    showAddEncounter: state.showAddEncounter,
    addedBy: state.currentUser
  });
  
  export default connect(mapStateToProps)(AddEncounter);