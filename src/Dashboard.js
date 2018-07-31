/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/button-has-type: 0 */
import React from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';
import avatar from './avatar.svg';
import Accordion from './Accordion';

// TODO: -- pull name from localStorage & insert into ProfileName
// TODO: -- create "edit" icon for Avatar
// TODO: -- create 7 Day Forecast
// TODO: -- create Monthly Calendar
// FIXME: -- no content for Streaks
// FIXME: -- no content for Achievements
// TODO: -- wrap categories in Links
// TODO: -- update App.js w/ new routes

const Dashboard = () => (
  <Container>
    <div>
      <ProfilePicture src={avatar} alt="" />
      <ProfileName>Your Name Here!</ProfileName>
    </div>
    <div>
      <Accordion>
        <p>Forecast</p>
        <p>{new Date().toDateString()}</p>
      </Accordion>
      <hr />
      <Accordion>
        <p>Streaks</p>
        {/* <p>You currently have 0 streaks.</p> */}
      </Accordion>
      <hr />
      <Accordion>
        <p>Achievements</p>
        <p>You currently have 0 achievements.</p>
      </Accordion>
      <hr />
      <StyledLink to="/tracking">
        <Accordion>
          <p>Currently Tracking</p>
          <p>Placeholder Text!</p>
        </Accordion>
      </StyledLink>
      <hr />
      <StyledLink to="/analytics">
        <Accordion>
          <p>Analytics &amp; Insights</p>
          <p>Placeholder Text!</p>
        </Accordion>
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
