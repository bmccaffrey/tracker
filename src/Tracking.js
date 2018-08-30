/* eslint react/jsx-one-expression-per-line: 0 */
import React, { Component } from 'react';
import { Accordion } from './Utilities';
import { Theme } from './Elements';

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
            <StyledRow>{item}</StyledRow>
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

const StyledRow = Theme.extend`
  text-indent: 10%;
`;

// Items is exported to Analytics.js
