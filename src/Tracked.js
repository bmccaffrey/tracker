import React from 'react';
import styled from 'styled-components';

const Tracked = props => (
  <Container>
    {props.name}
  </Container>
);

export default Tracked;

const Container = styled.div`
  background: #eee;
  border: 0;
  border-radius: 10px;
  color: #444;
  height: 30px;
  line-height: 30px;
  margin-top: 25px;
  padding: 0;
  text-align: center;
  vertical-align: middle;
`;
