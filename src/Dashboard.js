import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar.svg';

const Dashboard = () => (
  <div>
    <ProfilePicture src={Avatar} alt="" />
    <ProfileName>
Your Name Here!
    </ProfileName>
    <hr />
    <p>
Forecast
    </p>
    <hr />
    <p>
Streaks
    </p>
    <hr />
    <p>
Achievements
    </p>
    <hr />
    <p>
Currently Tracking
    </p>
  </div>
);

export default Dashboard;

const ProfilePicture = styled.img`
  height: 50px;
  float: left;
  // background-color: black;
`;
const ProfileName = styled.h1`
  text-align: center;
`;
