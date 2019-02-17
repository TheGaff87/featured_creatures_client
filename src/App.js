import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './components/landing-page';
import Main from './components/main';

class App extends Component {
  render () {
    return (
      <Router>
      <div>
      <header>
        <h1>Featured Creatures</h1>
        <h2>Use the dropdowns to get started</h2>
      </header>
      <main>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/main" component={Main} />
      </main>
      </div>
      </Router>
    );
  }
}
export default App;
