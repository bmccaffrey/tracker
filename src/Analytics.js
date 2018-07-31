/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react';
import styled from 'styled-components';

const Analytics = () => (
  <div>
    <h1 style={{ marginBottom: '0px' }}>Let&apos;s analyze</h1>
    <StyledH1>&amp; compare</StyledH1>
    <h2>and see if we can&apos;t come up with some insights...</h2>
  </div>
);

export default Analytics;
const StyledH1 = styled.h1`
  text-indent: 10%;
  margin-top: 0px;
`;
