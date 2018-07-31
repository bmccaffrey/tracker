import React, { Component } from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';

export default class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      class: '',
    };
  }

  toggle = () => {
    this.setState({
      on: !this.state.on,
      class: 'line1',
    });
    if (this.state.on) {
      this.setState({ class: 'line1' });
    } else {
      this.setState({
        class: '',
      });
    }
  };

  render() {
    return (
      <StyledLink to="/dashboard">
        <Burger onClick={this.toggle}>
          <div className={this.state.class} />
          <div className={this.state.class} />
          <div className={this.state.class} />
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
    border-color: orange;
  }
  .line2 {
  }
  .line3 {
  }
`;
