import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

export default function Header(props) {
  return (
    <Banner className="App-header">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">
Welcome to React
        </h1>
      </div>
    </Banner>
  );
}

const Banner = styled.header`
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    width: 100%;
    justify-content: center;
  }
`;
