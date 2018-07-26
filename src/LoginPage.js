import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import Header from './Header';
import Login from './Login';

const LoginPage = () => (
  <AppGrid className="App">
    <Header />
    <Login />
  </AppGrid>
);

export default LoginPage;

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 25%);
`;
