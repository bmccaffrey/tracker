import React from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';

const Hamburger = () => (
  <StyledLink to="/dashboard">
    <Burger>
      <div className="line1" />
      <div className="line2" />
      <div className="line3" />
    </Burger>
  </StyledLink>
);

export default Hamburger;

const Burger = styled.div`
  height: 24px;
  position: relative;
  bottom: 5px;
  right: 10px;
  > div {
    border: 1px solid #fff;
    width: 18px;
    background-color: white;
    margin: 6px 0;
  }
`;
