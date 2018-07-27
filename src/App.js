import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import LoginPage from './LoginPage';
import Greeting from './Greeting';
import Header from './Header';
import Dashboard from './Dashboard';

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={LoginPage} />
      <Route path="/greeting" component={Greeting} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </Router>
);

export default App;
