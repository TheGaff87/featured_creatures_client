import React from 'react';
import {
    BrowserRouter as Router,
    Route} from 'react-router-dom';
import SigninButton from './signin-button';
import Signin from './signin';
import LoggedIn from './logged-in';
import AddEncounterButton from './add-encounter-button';
import AddEncounter from './add-encounter';
import AnimalDropdown from './animal-dropdown';
import ZooDropdown from './zoo-dropdown';
import DisplayEncounter from './display-encounter';
import DisplayZoo from './display-zoo';
import './main.css';

export default function Main(props) {
    return (
        <Router>
        <div className="main">
        <h2>You can find encounters by animal or zoo below. You can also signup or signin. Your adventure awaits!</h2>
            <section className="top-buttons">
                <SigninButton />
                <Signin />
                <LoggedIn />
                <AddEncounterButton />
                <AddEncounter />
            </section>
            <section className="dropdowns">
                <AnimalDropdown />
                <ZooDropdown />
            </section>
            <section className="results">
                <Route exact path="/encounter" component={DisplayEncounter} />
                <Route exact path="/zoo" component={DisplayZoo} />
            </section>
        </div>
        </Router>
    );
}