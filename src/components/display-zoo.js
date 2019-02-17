import React from 'react';
import DisplayEncounter from './display-encounter';

export default function DisplayZoo(props) {
    return (
        <section className="display-zoo">
            <h1>Animal Encounters at <a href={props.zooWebsite} target='_blank'>{props.ZooName}</a></h1>
            <DisplayEncounter />
        </section>
    );
}