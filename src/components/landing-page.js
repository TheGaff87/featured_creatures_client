import React from 'react';
import { connect } from 'react-redux';
import {getAnimals} from '../actions';
import {getZoos} from '../actions';
import {getAllEncounters} from '../actions';
import {login} from '../actions';

import './landing-page.css';
import {Link} from 'react-router-dom';

export class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.startButton = this.startButton.bind(this);
        this.startDemo = this.startDemo.bind(this);
    }
    
    startButton(e) {
        this.props.dispatch(getAnimals());
        this.props.dispatch(getZoos());
        this.props.dispatch(getAllEncounters());
    }

    startDemo(e) {
        const user = {
            username: "user1",
            password: "pass1"
            };
        this.props.dispatch(login(user));
        this.props.dispatch(getAnimals());
        this.props.dispatch(getZoos());
        this.props.dispatch(getAllEncounters());
    }

    render() {
        return (
        <section className="landing-page">
            <p className='landing-welcome'>Do you love animals? Featured Creatures makes it easy to go beyond the ordinary zoo experience and engage in behind-the-scenes, up-close-and-personal encounters with your favorite critters. If you create an account, you can add new encounters. Click the photo to get started from scratch or click the DEMO button to explore using the demo account.</p>
            <Link to="/main"><input type="image" className="start-button" alt="koala-encounter" src={require('../koala-encounter.jpg')} onClick={this.startButton}></input></Link>
            <br />
            <Link to='/main'><button type='button' className='demo' onClick={this.startDemo}>
                <p>DEMO</p> 
                <p>Username: user1</p>
                <p>Password: pass1</p>
            </button></Link>
        </section>
        )
    }
}
  
  export default connect()(LandingPage);