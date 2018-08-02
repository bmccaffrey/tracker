/* eslint react/jsx-one-expression-per-line: 0 */
import React, { Component } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';

export default class Tracking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      items: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.iterate = this.iterate.bind(this);
  }

  componentWillMount() {
    this.iterate();
  }

  handleInput(e) {
    this.setState({ value: e.target.value });
  }

  iterate() {
    for (let i = 0; i < localStorage.length; i++) {
      this.state.items.push(localStorage[`key${i}`]);
    }
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <h1>Alright!</h1>
        <h2>We&apos;re currently tracking your:</h2>
        {this.state.items.map(item => (
          <Accordion>
            <Container>{item}</Container>
            <input
              value={value}
              onInput={this.handleInput}
              style={{ border: '1px solid black' }}
              type="text"
              placeholder="Metric"
            />
            <button style={{ border: '1px solid black' }}>Add Metric</button>
          </Accordion>
        ))}
      </div>
    );
  }
}

const Container = styled.div`
  background: #eee;
  border: 0;
  border-radius: 10px;
  color: #444;
  height: 30px;
  line-height: 30px;
  margin-top: 25px;
  padding: 0;
  text-indent: 10%;
  vertical-align: middle;
`;

export { Container };
// Items & Container are exported to Analytics.js
