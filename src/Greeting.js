import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      message: (
        <div>
          <h1>Hiya!</h1>
          <h2>Let's get tracking!</h2>
          <hr />
          <p>What would you like to start tracking?</p>
        </div>
      ),
      key: 0,
    };
  }

  handleInput = e => {
    this.setState({ value: e.target.value });
    console.log(this.state.value);
  };

  submit = () => {
    localStorage.setItem(`key${this.state.key}`, this.state.value);
    this.setState({
      message: (
        <div>
          <h1>Alright!</h1>
          <h2>We'll track your {this.state.value} for you!</h2>
          <h3>Want to track anything else?</h3>
        </div>
      ),
      value: '',
      key: this.state.key + 1,
    });
  };
  clear = () => {
    this.setState({ value: '' });
  };

  render() {
    return (
      <div>
        {this.state.message}
        <input type="text" value={this.state.value} onInput={this.handleInput} />
        <button type="submit" onClick={this.submit}>
          Track
        </button>
        <button onClick={this.clear}>Clear</button>
        <p>Finished?</p>
        <Link to="/dashboard">
          <Arrow>&#8627;</Arrow>
        </Link>
      </div>
    );
  }
}

const Arrow = styled.p`
  font-size: 2em;
  margin: 0;
`;
