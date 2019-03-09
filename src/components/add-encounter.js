import React from 'react';
import { connect } from 'react-redux';
import TextInput from './text-input';
import TextareaInput from './textarea-input';
import './add-encounter.css'

export function AddEncounter(props) {
    if (props.showAddEncounter) {
    return (
        <section className='add-encounter'>
            <form action='/api/' method='post' className='add-encounter-form'>
            <TextInput field='Animal (required)' className='animal' placeholder='Enter animal featured in this encounter' />
            <TextInput field='Encounter Name (required)' className='encounter-name' placeholder='Enter encounter name' />
            <TextInput field='Encounter Image (required)' className='encounter-image' placeholder='Enter URL with encounter image' />
            <TextInput field='Encounter Website' className='encounter-website' placeholder='Enter encounter website, if available' />
            <TextInput field='Zoo Name (required)' className='zoo-name' placeholder='Enter zoo name' />
            <TextInput field='Zoo Website (required)' className='zoo-website' placeholder='Enter zoo website' />
            <TextInput field='Zoo Location (required)' className='zoo-location' placeholder='Ex. San Francisco, CA, USA or Sydney, Australia' />
            <TextInput field='Encounter Cost (required)' className='encounter-cost' placeholder='Ex. $60 USD' />
            <TextInput field='Encounter Schedule (required)' className='encounter-schedule' placeholder='Enter encounter schedule' />
            <TextareaInput field='Encounter Description' className='encounter-description' placeholder='Enter short description of encounter. Do not include personal review of the experience.' />
            <button type="submit" className="submit-encounter">Submit Encounter</button>
            </form>
        </section>
    )
    } else {
        return null
    }
}

const mapStateToProps = state => ({
    showAddEncounter: state.showAddEncounter
  });
  
  export default connect(mapStateToProps)(AddEncounter);