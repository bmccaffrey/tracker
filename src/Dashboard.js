/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/button-has-type: 0 */
import React from 'react';
import styled from 'styled-components';
import StyledLink from './StyledLink';
import avatar from './avatar.svg';
import Accordion from './Accordion';
import edit from './edit.svg';

// TODO: -- pull name from localStorage & insert into ProfileName
// TODO: -- create 7 Day Forecast
// TODO: -- create Monthly Calendar
// FIXME: -- no content for Streaks
// FIXME: -- no content for Achievements
// TODO: -- wrap categories in Links
// TODO: -- update App.js w/ new routes
// TODO: -- create editPicture function

const Dashboard = () => (
  <Container>
    <div>
      <ProfilePicture src={avatar} alt="" />
      <ProfileName>Your Name Here!</ProfileName>
      <StyledButton>
        <Edit src={edit} alt="" />
        Edit Picture
      </StyledButton>
    </div>
    <div>
      <Accordion>
        <p>Forecast</p>
        <p>{new Date().toDateString()}</p>
      </Accordion>
      <hr />
      <Accordion>
        <p>Streaks</p>
        <p>You currently have 0 streaks.</p>
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
  background-color: #56d5fa;
  margin-top: 5px;
`;
const ProfileName = styled.h1`
  text-align: center;
  margin-bottom: 0px;
`;
const Container = styled.div`
  display: grid;
  grid-template-rows: 55px 1fr;
  row-gap: 100px;
  margin: 5%;
`;
const Edit = styled.img`
  height: 15px;
  width: 15px;
  margin-right: 5px;
  float: left;
`;
const StyledButton = styled.button`
  background: #eee;
  color: #444;
  padding: 5px;
  text-align: center;
  border: 0;
  position: relative;
  left: 10px;
  margin-top: 5px;
`;
