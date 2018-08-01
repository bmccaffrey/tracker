/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react';
import styled from 'styled-components';

// Items exported to Analytics.js
// iterate over localStorage and push objects to items array
const Items = [];
for (let i = 0; i < localStorage.length; i++) {
  Items.push(localStorage[`key${i}`]);
}

/*
Pass each storage object to Tracked's props.name
Returning a styled div for each object
*/
const Tracked = props => <Container>{props.name}</Container>;

const Tracking = () => (
  <div>
    <h1>Alright!</h1>
    <h2>We're currently tracking your:</h2>
    {Items.map(item => <Tracked name={item} />)}
  </div>
);

// Container exported to Analytics.js
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

export default Tracking;
export { Container };
export { Items };
