import React from 'react';
import styled from 'styled-components';
import GetExample from './GetExample';

const MarginContainer = styled.div`
  margin: 5%;
`;

const StyledInput = styled.input`
  background: #eee;
  border: 0;
  border-radius: 10px;
  color: #444;
  height: 30px;
  width: 100%;
  line-height: 30px;
  padding: 0;
`;

const Simplified = () => (
  <MarginContainer>
    <h1>What would you like to track?</h1>
    <StyledInput type="text" />
    <h1>How would you like to track it?</h1>
    <StyledInput type="text" />
    <h1>When's good for you?</h1>
    <StyledInput type="text" />
    <h1>Why do you want to track it?</h1>
    <StyledInput type="text" />
    <GetExample />
  </MarginContainer>
);
export default Simplified;
