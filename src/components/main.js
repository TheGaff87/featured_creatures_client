import React from 'react';
import { connect } from 'react-redux';
import NotLoggedIn from './not-logged-in';
import SignupButton from './signup-button';
import SignupCheck from './signup-check';
import Signup from './signup';
import SigninButton from './signin-button';
import SigninCheck from './signin-check';
import Signin from './signin';
import LoggedIn from './logged-in';
import AddEncounterButton from './add-encounter-button';
import AddEncounter from './add-encounter';
import AnimalDropdown from './animal-dropdown';
import ZooDropdown from './zoo-dropdown';
import DisplayEncounter from './display-encounter';
import './main.css';

export class Main extends React.Component {

    render() {
    return (
        <div className="main">
            {!this.props.isLoggedIn ? <NotLoggedIn /> : <LoggedIn />}
            <section className="top-buttons">
                <SignupButton />
                <SignupCheck />
                <Signup />
                <SigninButton />
                <SigninCheck />
                <Signin />
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
    );
}
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
  });
  
  export default connect(mapStateToProps)(Main);