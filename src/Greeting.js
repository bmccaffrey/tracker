import React, { Component } from 'react';
import Header from './Header';

class Greeting extends Component {
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
    };
  }

  handleInput = e => {
    this.setState({ value: e.target.value });
    console.log(this.state.value);
  };

  submit = () => {
    this.setState({
      message: (
        <div>
          <h1>Alright!</h1>
          <h2>We'll track your {this.state.value} for you!</h2>
          <h3>Want to track anything else?</h3>
        </div>
      ),
      value: '',
    });
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.message}
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
