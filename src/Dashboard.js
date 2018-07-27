import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar.svg';

const Dashboard = () => (
  <div>
    <ProfilePicture src={Avatar} alt="" />
    <h1>
Welcome to your Dashboard!
    </h1>
  </div>
);

export default Dashboard;

const ProfilePicture = styled.img`
  height: 60px;
`;
