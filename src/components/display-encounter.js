import React from 'react';
import { connect } from 'react-redux';

import EditEncounterButton from './edit-encounter-button';
import EditEncounter from './edit-encounter';
import DeleteEncounterButton from './delete-encounter-button';

import './display-encounter.css';

export function DisplayEncounter(props) {

    const encounters = props.encounters.map((encounter, index) => (
        <section className="display-encounter" key={index}>
            <img src={encounter.encounterImage} alt={encounter.encounterName} />
            <p><span>Encounter Name</span>: <a href={encounter.encounterWebsite} target='_blank'/>{encounter.encounterName}</p>
            <p><span>Zoo Name</span>: <a href={encounter.zooWebsite} target='_blank'>{encounter.zooName} </a></p>
            <p><span>Zoo Location</span>: {encounter.zooLocation}</p>
            <p><span>Encounter Cost</span>: {encounter.encounterCost}</p>
            <p><span>Encounter Schedule</span>: {encounter.encounterSchedule}</p>
            <p><span>Encounter Description</span>: {encounter.encounterDescription}</p>
            {props.currentUser === encounter.addedBy ? 
            <div>
                <EditEncounterButton />
                <EditEncounter />
                <DeleteEncounterButton /></div> : null }
        </section>
    ));

    return (
        <div>
        <div>
            {encounters}
        </div>
        </div>
    );
}

const mapStateToProps = state => ({
    encounters: state.encounters,
    currentUser: state.currentUser
  });
  
  export default connect(mapStateToProps)(DisplayEncounter);