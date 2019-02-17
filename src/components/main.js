import React from 'react';
import Signin from './signin';
import AddEncounter from './add-encounter';
import AnimalDropdown from './animal-dropdown';
import ZooDropdown from './zoo-dropdown';
import DisplayEncounter from './display-encounter';
import DisplayZoo from './display-zoo'
import './main.css';

export default function Main(props) {
    return (
        <div className="main">
            <section className="top-buttons">
                <Signin />
                <AddEncounter />
            </section>
            <section className="dropdowns">
                <AnimalDropdown />
                <ZooDropdown />
            </section>
            <section className="results">
                <h2>Kangaroo Encounters</h2>
                <DisplayEncounter />
                <DisplayZoo />
            </section>
        </div>
    );
}