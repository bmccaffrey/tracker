import React, { Component } from 'react';
import StyledLink from './StyledLink';
import styled from 'styled-components';
import './Hamburger.css';

// TODO: -- create Sidenav overlay
// TODO: -- create Logout Icon
// FIXME: -- unable to implement CSS transition w/o stylesheet
export default class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      class: 'container',
    };
  }

  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  render() {
    let className = 'container';
    if (this.state.on) {
      className += ' change';
    }

    return (
      <StyledLink to="/dashboard">
        <div onClick={this.toggle} className={className}>
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
          {this.state.on && <SideNav />}
        </div>
      </StyledLink>
    );
  }
}

const SideNav = styled.div`
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background: black;
  opacity: 0.5;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
`;
