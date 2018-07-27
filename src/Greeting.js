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
    let message;
    if (this.state.value) {
      message = (
        <div>
          <h1>Track my {this.state.value}</h1>
        </div>
      );
    } else {
      message = (
        <div>
          <h1>Hiya!</h1>
          <h2>Let's get tracking!</h2>
          <hr />
          <p>What would you like to start tracking?</p>
        </div>
      );
    }

    return (
      <div>
        <Header />
        {message}
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
