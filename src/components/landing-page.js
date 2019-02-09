import React from 'react';

import './landing-page.css';

export default function LandingPage(props) {
    return (
        <section className="landing-page">
            <header><h1>Featured Creatures</h1></header>
            <p>Do you love animals? Featured Creatures makes it easy to find behind-the-scenes, up close and personal encounters with your favorite critters. Use the dropdowns to find your next animal adventure!</p>
            <input type="image" className="start-button" alt="koala-encounter" src={require('../koala-encounter.jpg')}></input>
        </section>
    );
}