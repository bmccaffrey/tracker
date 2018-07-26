import React, { Component } from 'react';
import Header from './Header';

class Greeting extends Component {
  constructor(props) {
    super(props);
  }

  submit = () => {
    console.log(this.text.value);
  };

  render() {
    return (
      <div>
        <Header />
        <h1>Hiya!</h1>

        <h2>Let's get tracking!</h2>
        <hr />
        <p>What would you like to start tracking?</p>

        <input type="text" ref={input => (this.text = input)} />
        <button type="submit" onClick={this.submit}>
          Track
        </button>

        <button>Clear</button>
      </div>
    );
  }
}
export default Greeting;
