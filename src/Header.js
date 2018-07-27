import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import Hamburger from './Hamburger';

const Header = () => (
  <Link to="/">
    <Banner className="App-header">
      <Logo src={logo} className="App-logo" alt="logo" />
      <Title className="App-title">
Welcome to React
      </Title>
      <Hamburger />
    </Banner>
  </Link>
);

export default Header;

const Banner = styled.header`
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const Title = styled.h1`
  color: white;
  font-size: 1rem;
  text-align: center;
`;
