import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import Header from './Header';
import Login from './Login';

const App = () => (
  <Router>
    <AppGrid className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/test" component={Test} />
      </Switch>
    </AppGrid>
  </Router>
);

export default App;

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 25%);
`;

const Test = () => (
  <h1>
Test
  </h1>
);
