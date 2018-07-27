import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './LoginPage';
import Greeting from './Greeting';
import Header from './Header';
import Dashboard from './Dashboard';
import Tracking from './Tracking';

const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/greeting" component={Greeting} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/tracking" component={Tracking} />
      </Switch>
    </div>
  </Router>
);

export default App;
