import React from 'react';
import { connect } from 'react-redux';
import './display-encounter.css';

export function DisplayEncounter(props) {
    return (
        <section className="display-encounter">
            <img src={props.encounterImage} alt={props.encounterName} />
            <p><span>Encounter Name</span>: {props.encounterName}</p>
            <p><span>Zoo Name</span>: <a href={props.zooWebsite} target='_blank'>{props.zooName} </a></p>
            <p><span>Zoo Location</span>: {props.zooLocation}</p>
            <p><span>Encounter Cost</span>: {props.encounterCost}</p>
            <p><span>Encounter Schedule</span>: {props.encounterSchedule}</p>
            <p><span>Encounter Description</span>: {props.encounterDescription}</p>
        </section>
    );
}

const mapStateToProps = state => ({
    encounterImage: state.encounterImage,
    encounterName: state.encounterName,
    zooName: state.zooName,
    zooWebsite: state.zooWebsite,
    zooLocation: state.zooLocation,
    encounterCost: state.encounterCost,
    encounterSchedule: state.encounterSchedule,
    encounterDescription: state.encounterDescription
  });
  
  export default connect(mapStateToProps)(DisplayEncounter);