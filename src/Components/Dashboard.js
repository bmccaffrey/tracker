/* eslint react/jsx-one-expression-per-line: 0 */
/* eslint react/button-has-type: 0 */
import React from 'react';
import styled from 'styled-components';
import { Accordion } from 'Utilities';
import { avatar, edit } from 'Icons';
import { StyledLink } from 'Elements';

// TODO: -- pull name from localStorage & insert into ProfileName
// TODO: -- create 7 Day Forecast
// TODO: -- create Monthly Calendar
// FIXME: -- no content for Streaks
// FIXME: -- no content for Achievements
// TODO: -- wrap categories in Links
// TODO: -- update App.js w/ new routes
// TODO: -- create editPicture function
const ProfilePicture = styled.img`
  background-color: #56d5fa;
  border-radius: 50%;
  float: left;
  height: 50px;
  margin-top: 5px;
  width: 50px;
`;
const ProfileName = styled.h1`
  margin-bottom: 0px;
  text-align: center;
`;
const Container = styled.div`
  display: grid;
  grid-template-rows: 55px 1fr;
  margin: 5%;
  row-gap: 100px;
`;
const Edit = styled.img`
  height: 15px;
  float: left;
  margin-right: 5px;
  width: 15px;
`;
const StyledButton = styled.button`
  background: #eee;
  border: 0;
  color: #444;
  left: 10px;
  margin-top: 5px;
  padding: 5px;
  position: relative;
  text-align: center;
`;

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
