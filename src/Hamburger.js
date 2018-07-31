import React, { Component } from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';

export default class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
    };
  }

  render() {
    return (
      <StyledLink to="/dashboard">
        <Burger>
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </Burger>
      </StyledLink>
    );
  }
}

const Burger = styled.div`
  height: 24px;
  position: relative;
  bottom: 5px;
  right: 10px;
  > div {
    border: 1px solid #fff;
    width: 18px;
    margin: 6px 0;
  }
  .line1 {
  }
  .line2 {
  }
  .line3 {
  }
`;
