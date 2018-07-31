/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react';
import styled from 'styled-components';
import { Items } from './Tracking';
import Tracked from './Tracked';

// FIXME: -- allow user to select which ones to compare
// FIXME: -- allow user to specify time range
const Analytics = () => (
  <Container>
    <h1 style={{ marginBottom: '0px' }}>Let&apos;s analyze</h1>
    <StyledH1>&amp; compare</StyledH1>
    <h2>and see if we can&apos;t come up with some insights...</h2>
    {Items.map(item => <Tracked name={item} />)}
  </Container>
);

export default Analytics;
const StyledH1 = styled.h1`
  text-indent: 10%;
  margin-top: 0px;
`;
const Container = styled.div`
  margin: 5%;
`;
