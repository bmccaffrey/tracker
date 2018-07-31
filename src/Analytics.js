/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react';
import styled from 'styled-components';

const Analytics = () => (
  <div>
    {/* <h1>
      Let&apos;s analyze<br />&amp; compare
    </h1> */}
    <h1 style={{ marginBottom: '0px' }}>Let&apos;s analyze</h1>
    <Intro>&amp; compare</Intro>
    <h2>and see if we can&apos;t come up with some insights...</h2>
  </div>
);

export default Analytics;

const Intro = styled.div`
  text-indent: 10%;
  font-size: 2em;
  font-weight: bold;
`;
