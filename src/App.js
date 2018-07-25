import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './Header';
import Login from './Login';

const App = () => (
  <AppGrid className="App">
    <Header />
    <Login />
  </AppGrid>
);

export default App;

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 25%);
`;
