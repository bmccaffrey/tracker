import React, { Component } from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';

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
          <hr />
          <p>Want to track anything else?</p>
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
      <Container>
        {this.state.message}
        <input type="text" value={this.state.value} onInput={this.handleInput} className="track" />
        <button type="submit" onClick={this.submit}>
          Track
        </button>
        <button onClick={this.clear}>Clear</button>
        <p>Finished?</p>
        <StyledLink to="/dashboard">
          <Arrow>&#8627;</Arrow>
        </StyledLink>
      </Container>
    );
  }
}

const Arrow = styled.p`
  font-size: 2em;
  margin: 0;
`;
const Container = styled.div`
margin: 5%;
.track {
  background: #eee;
  border: 0;
  border-radius: 10px;
  color: #444;
  height: 30px;
  margin-top: 25px;
  padding: 0;
  text-align: center;
  width: 100%;
  ::-webkit-input-placeholder {
    color: #444;
  }
`;
