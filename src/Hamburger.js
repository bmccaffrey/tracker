import React, { Component } from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';
import './Hamburger.css';

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
    // if (this.state.on) {
    //   this.setState({ class: 'container change' });
    // } else {
    //   this.setState({
    //     class: 'container',
    //   });
    // }
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
        </div>
      </StyledLink>
    );
  }
}
