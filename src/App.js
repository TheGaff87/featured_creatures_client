import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/landing-page';
import Signin from './components/signin';
import AddEncounter from './components/add-encounter'

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage />
        <Signin />
        <AddEncounter />
      </div>
    );
  }
}

export default App;
