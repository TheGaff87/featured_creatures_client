import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/landing-page';
import Signin from './components/signin'

class App extends Component {
  render() {
    return (
      <div>
        <LandingPage />
        <Signin />
      </div>
    );
  }
}

export default App;
