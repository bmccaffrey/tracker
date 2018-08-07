import React from 'react';
import styled from 'styled-components';
import { MarginContainer, StyledInput } from './StyledComponents';

const Simplified = () => (
  <MarginContainer>
    <h1>
What would you like to track?
    </h1>
    <StyledInput type="text" />
    <h1>
How would you like to track it?
    </h1>
    <StyledInput type="text" />
    <h1>
When's good for you?
    </h1>
    <StyledInput type="text" />
    <h1>
Why do you want to track it?
    </h1>
    <StyledInput type="text" />
  </MarginContainer>
);
export default Simplified;
