import React, { Component } from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';
import logo from './logo.svg';
import Hamburger from './Hamburger';

const Header = () => (
  <StyledLink to="/">
    <Banner className="App-header">
      <Logo src={logo} className="App-logo" alt="logo" />
      <Title className="App-title">
Tracker
      </Title>
      <Hamburger />
    </Banner>
  </StyledLink>
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
