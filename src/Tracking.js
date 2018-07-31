/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react';

const items = [];
for (let i = 0; i < localStorage.length; i++) {
  items.push(localStorage[`key${i}`]);
}

const Tracking = () => (
  <div>
    <h1>Alright!</h1>
    <h2>We're currently tracking:</h2>
  </div>
);

export default Tracking;
