import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import LandingPage from './components/landing-page';
import Main from './components/main';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
      <Router>
      <div className='row'>
      <header className='col-12'>
        <h1>Featured Creatures</h1>
      </header>
      <main className='col-12'>
        <Route exact path='/' component={LandingPage} />
        <Route path='/main' component={Main} />
      </main>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;