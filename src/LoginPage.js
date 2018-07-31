import React from 'react';
import styled from 'styled-components';
import Login from './Login';

// TODO: -- add background image
const LoginPage = () => (
  <AppGrid className="App">
    <div />
    <Login />
  </AppGrid>
);

export default LoginPage;

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 25%);
`;
