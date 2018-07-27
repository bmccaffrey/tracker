/* eslint react/jsx-one-expression-per-line: 0 */
import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import avatar from './avatar.svg';

const Dashboard = () => (
  <div>
    <ProfilePicture src={avatar} alt="" />
    <ProfileName>Your Name Here!</ProfileName>
    <hr />
    <p>Forecast</p>
    <hr />
    <p>Streaks</p>
    <hr />
    <p>Achievements</p>
    <hr />
    <Link to="/tracking">
      <p>Currently Tracking</p>
    </Link>
    <hr />
    <p>Analytics &amp; Insights</p>
  </div>
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
