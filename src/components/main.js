import React from 'react';
import Signin from './signin';
import AddEncounter from './add-encounter';
import AnimalDropdown from './animal-dropdown';
import ZooDropdown from './zoo-dropdown';
import DisplayEncounter from './display-encounter';
import DisplayZoo from './display-zoo';
import Dropdowns from './dropdowns';
import './main.css';

export default function Main(props) {
    return (
        <div className="main">
        <h2>Use the dropdowns to get started</h2>
            <section className="top-buttons">
                <Signin />
            </section>
            <section className="dropdowns">
                <AnimalDropdown />
                <ZooDropdown />
            </section>
            <section className="results">
                {/*<Dropdowns />*/}
                <h3>Kangaroo Encounters</h3>
                <DisplayEncounter />
                <DisplayZoo />
            </section>
        </div>
    );
}