import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledLink, Input, StyledButton } from '../Elements';

const Arrow = styled.p`
  font-size: 2em;
  margin: 0;
`;
const Container = styled.div`
  margin: 5%;
`;
const StyledH2 = styled.h2`
  text-indent: 10%;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// TODO: -- "track" button darkens on text input
// TODO: -- add box-shadow to buttons
// FIXME -- "Finished?" & Arrow need additional styling
export default class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      message: (
        <div>
          <h1>Hiya!</h1>
          <StyledH2>Let's get tracking!</StyledH2>
          <hr />
          <p>What would you like to start tracking?</p>
        </div>
      ),
    };
  }

  async postName() {
    const data = [this.state.value];
    console.log(data);
    return fetch('/addname', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  handleInput = e => {
    this.setState({ value: e.target.value });
  };

  async resetState() {
    this.setState({
      message: (
        <div>
          <h1>Alright!</h1>
          <StyledH2>We'll track your {this.state.value} for you!</StyledH2>
          <hr />
          <p>Want to track anything else?</p>
        </div>
      ),
      value: '',
    });
  }

  async submit() {
    this.postName()
      .then(() => {
        console.log('should be done by now');
        this.resetState();
      })
      .catch(error => console.log(error));
  }

  clear = () => {
    this.setState({ value: '' });
  };

  render() {
    return (
      <Container>
        {this.state.message}
        <form name="initial-activity" action="/addname" method="post">
          <Input type="text" name="name" value={this.state.value} onInput={this.handleInput} />
          <FlexContainer>
            <StyledButton type="submit" onClick={this.submit}>
              Track
            </StyledButton>
            <StyledButton onClick={this.clear}>Clear</StyledButton>
          </FlexContainer>
        </form>
        <p>Finished?</p>
        <StyledLink to="/dashboard">
          <Arrow>&#8627;</Arrow>
        </StyledLink>
      </Container>
    );
  }
}
