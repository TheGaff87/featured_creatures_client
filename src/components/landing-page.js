import React from 'react';

import './landing-page.css';
import {Link} from 'react-router-dom';

export default function LandingPage(props) {
    return (
        <section className="landing-page">
            <p>Do you love animals? Featured Creatures makes it easy to find behind-the-scenes, up close and personal encounters with your favorite critters. Click the photo to get started.</p>
            <Link to="/main"><input type="image" className="start-button" alt="koala-encounter" src={require('../koala-encounter.jpg')}></input></Link>
        </section>
    );
}