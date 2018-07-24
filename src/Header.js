import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

export default function Header(props) {
  return (
    <Banner className="App-header">
      <div>
        <Logo src={logo} className="App-logo" alt="logo" />
        <Title className="App-title">
Welcome to React
        </Title>
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
const Logo = styled.img`
  height: 50px;
  width: 50px;
  float: left;
`;

const Title = styled.h1`
  color: white;
  font-size: 1rem;
  text-align: center;
`;
