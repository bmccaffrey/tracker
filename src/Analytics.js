/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react';
import styled from 'styled-components';
import { Container } from './Tracking';

// FIXME: -- allow user to select which ones to compare
// TODO: -- write a compare function
// FIXME: -- allow user to specify time range
// TODO: -- create a <select> dropdown allow user to specify time range
// FIXME: -- need a way to chart data
// TODO: -- Chart.js ??
const Items = [];
for (let i = 0; i < localStorage.length; i++) {
  Items.push(localStorage[`key${i}`]);
}

const Analytics = () => (
  <MarginContainer>
    <h1 style={{ marginBottom: '0px' }}>Let&apos;s analyze</h1>
    <StyledH1>&amp; compare</StyledH1>
    <h2>and see if we can&apos;t come up with some insights...</h2>
    {Items.map(item => (
      <Container>
        <Checkbox type="checkbox" name="" id="" />
        <label>{item}</label>
      </Container>
    ))}
  </MarginContainer>
);

export default Analytics;
const StyledH1 = styled.h1`
  text-indent: 10%;
  margin-top: 0px;
`;
const MarginContainer = styled.div`
  margin: 5%;
`;
const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  height: 20px;
  width: 20px;
  float: left;
  position: relative;
  left: 25px;
  top: 2px;
`;
