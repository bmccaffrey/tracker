import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar.svg';

const Dashboard = () => (
  <div>
    <ProfilePicture src={Avatar} alt="" />
    <ProfileName>
Your Name Here!
    </ProfileName>
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
