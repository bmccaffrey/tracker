import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Greeting from './Greeting';
import Header from './Header';
import Dashboard from './Dashboard';
import Tracking from './Tracking';
import Analytics from './Analytics';

// TODO: -- import routes & components from Dashboard.js
// FIXME: -- can't access certains routes w/o being logged in
const App = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/greeting" component={Greeting} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/tracking" component={Tracking} />
        <Route path="/analytics" component={Analytics} />
        {/* <Route path="/" component={} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
