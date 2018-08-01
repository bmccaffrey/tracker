/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react';
import styled from 'styled-components';

// FIXME: -- Tracked.js could be conflated here
// iterate over localStorage and push objects to items array
const Tracked = props => <Container>{props.name}</Container>;

export const Items = [];
for (let i = 0; i < localStorage.length; i++) {
  Items.push(localStorage[`key${i}`]);
}

// pass each storage object to Tracked's props.name
// Tracked returns a styled div for each object
const Tracking = () => (
  <div>
    <h1>Alright!</h1>
    <h2>We're currently tracking your:</h2>
    {Items.map(item => <Tracked name={item} />)}
  </div>
);

export default Tracking;

export const Container = styled.div`
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
