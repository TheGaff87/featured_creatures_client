import React from 'react';
import './display-encounter.css';

export default function DisplayEncounter(props) {
    return (
        <section className="display-encounter">
            <img src={props.encounterImage} alt={props.encounterName} />
            <p>Encounter Name: {props.encounterName}</p>
            <p>Zoo Name: <a href={props.zooWebsite} target='_blank'>{props.ZooName} </a></p>
            <p>Zoo Location: {props.zooLocation}</p>
            <p>Encounter Cost: {props.encounterCost}</p>
            <p>Encounter Schedule: {props.encounterSchedule}</p>
            <p>Encounter Description: {props.encounterDescription}</p>
        </section>
    );
}