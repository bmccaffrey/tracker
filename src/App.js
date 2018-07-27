import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import LoginPage from './LoginPage';
import Greeting from './Greeting';
import Header from './Header';

const App = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={LoginPage} />
      <Route path="/greeting" component={Greeting} />
    </div>
  </Router>
);

export default App;
