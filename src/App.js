import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './components/store';
import LandingPage from './components/landing-page';
import Main from './components/main';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
      <Router>
      <div>
      <header>
        <h1>Featured Creatures</h1>
      </header>
      <main>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/main" component={Main} />
      </main>
      </div>
      </Router>
      </Provider>
    );
  }
}
export default App;
