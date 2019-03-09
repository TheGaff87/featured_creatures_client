import React from 'react';
import { connect } from 'react-redux';

import EditEncounterButton from './edit-encounter-button';
import EditEncounter from './edit-encounter';
import DeleteEncounterButton from './delete-encounter-button';

import './display-encounter.css';

export function DisplayEncounter(props) {
    console.log(props.encounters)
    const encounters = props.encounters.map((encounter, index) => (
        <section className="display-encounter" key={index}>
            <img src={props.encounterImage} alt={props.encounterName}/>
            <p><span>Encounter Name</span>: <a href={props.encounterWebsite} target='_blank'/>{props.encounterName}</p>
            <p><span>Zoo Name</span>: <a href={props.zooWebsite} target='_blank'>{props.zooName} </a></p>
            <p><span>Zoo Location</span>: {props.zooLocation}</p>
            <p><span>Encounter Cost</span>: {props.encounterCost}</p>
            <p><span>Encounter Schedule</span>: {props.encounterSchedule}</p>
            <p><span>Encounter Description</span>: {props.encounterDescription}</p>
            <EditEncounterButton />
            <EditEncounter />
            <DeleteEncounterButton />
        </section>
    ));

    return (
        <div>
        <h3>{props.animal} Encounters</h3>
        <div>
            {encounters}
        </div>
        </div>
    );
}

const mapStateToProps = state => ({
    encounters: state.encounters
  });
  
  export default connect(mapStateToProps)(DisplayEncounter);