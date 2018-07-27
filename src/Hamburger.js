import React from 'react';
import styled from 'styled-components';

const Hamburger = () => (
  <Burger>
    <div />
    <div />
    <div />
  </Burger>
);

export default Hamburger;

const Burger = styled.div`
  height: 24px;
  > div {
    border: 1px solid #fff;
    width: 18px;
    background-color: white;
    margin: 6px 0;
  }
`;
