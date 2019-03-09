import React from 'react';
import { connect } from 'react-redux';
import {getAnimals} from '../actions';
import {getZoos} from '../actions';

import './landing-page.css';
import {Link} from 'react-router-dom';

export class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    
    onClick(e) {
        this.props.dispatch(getAnimals());
        this.props.dispatch(getZoos());
    }

    render() {
        return (
        <section className="landing-page">
            <h2>Do you love animals? Featured Creatures makes it easy to find behind-the-scenes, up close and personal encounters with your favorite critters. Anyone can find encounters by animal or zoo. If you signup/signin, you can add encounters and edit or delete encounters you add. Click the photo to get started.</h2>
            <Link to="/main"><input type="image" className="start-button" alt="koala-encounter" src={require('../koala-encounter.jpg')} onClick={this.onClick}></input></Link>
            
        </section>
        )
    };
}
  
  export default connect()(LandingPage);