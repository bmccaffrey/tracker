/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/button-has-type: 0 */
import React from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';
import avatar from './avatar.svg';
import Toggle from './Toggle';

const Dashboard = () => (
  <Container>
    <div>
      <ProfilePicture src={avatar} alt="" />
      <ProfileName>Your Name Here!</ProfileName>
    </div>
    <div>
      <p>Forecast</p>
      <hr />
      <p>Streaks</p>
      <hr />
      <p>Achievements</p>
      <hr />
      <StyledLink to="/tracking">
        <p>Currently Tracking</p>
      </StyledLink>
      <hr />
      <StyledLink to="/analytics">
        <p>Analytics &amp; Insights</p>
      </StyledLink>
    </div>
  </Container>
);

export default Dashboard;

const ProfilePicture = styled.img`
  float: left;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  // background-color: black;
`;
const ProfileName = styled.h1`
  text-align: center;
`;
const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  // row-gap: 20vh;
  row-gap: 100px;
`;
