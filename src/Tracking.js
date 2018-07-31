/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react';
import Tracked from './Tracked';

// FIXME: -- allow user to select which to compare
// TODO: -- create input buttons on "tracked" elements
// TODO: -- create input field to allow user to specify time range
// FIXME: -- need a way to chart data
// TODO: -- Chart.js ??
const items = [];
for (let i = 0; i < localStorage.length; i++) {
  items.push(localStorage[`key${i}`]);
}

const Tracking = () => (
  <div>
    <h1>Alright!</h1>
    <h2>We're currently tracking your:</h2>
    {items.map(item => <Tracked name={item} />)}
  </div>
);

export default Tracking;
