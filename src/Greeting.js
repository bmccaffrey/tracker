import React from 'react';
import Header from './Header';

const Greeting = () => (
  <div>
    <Header />
    <h1>
Hiya!
    </h1>
    <h2>
Let's get tracking!
    </h2>
    <hr />
    <p>
What would you like to start tracking?
    </p>
    <input type="text" />
    <button>
Track
    </button>
    <button>
Clear
    </button>
  </div>
);
export default Greeting;
