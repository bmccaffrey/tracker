import React, { Component } from 'react';
import Header from './Header';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleInput = e => {
    this.setState({ value: e.target.value });
    console.log(this.state.value);
  };

  render() {
    return (
      <div>
        <Header />
        <h1>Hiya!</h1>

        <h2>Let's get tracking!</h2>
        <hr />
        <p>What would you like to start tracking?</p>

        <input type="text" value={this.state.value} onInput={this.handleInput} />
        <button type="submit" onClick={this.submit}>
          Track
        </button>

        <button>Clear</button>
      </div>
    );
  }
}
export default Greeting;
