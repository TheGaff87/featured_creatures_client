import React from 'react';
import {
    BrowserRouter as Router,
    Route} from 'react-router-dom';
import { connect } from 'react-redux';
import SignupButton from './signup-button';
import Signup from './signup';
import SigninButton from './signin-button';
import Signin from './signin';
import LoggedIn from './logged-in';
import AddEncounterButton from './add-encounter-button';
import AddEncounter from './add-encounter';
import AnimalDropdown from './animal-dropdown';
import ZooDropdown from './zoo-dropdown';
import DisplayEncounter from './display-encounter';
import './main.css';

export class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
        <Router>
        <div className="main">
        <h2>You can filter encounters by animal or zoo below. You can also create an account or login to your account. Your adventure awaits!</h2>
            <section className="top-buttons">
                <SignupButton />
                <Signup />
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
                <DisplayEncounter />
            </section>
        </div>
        </Router>
    );
}
}

const mapStateToProps = state => ({
    
  });
  
  export default connect(mapStateToProps)(Main);