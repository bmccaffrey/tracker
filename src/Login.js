import React, { Component } from 'react';
import styled from 'styled-components';

export default function Login() {
  return (
    <div>
      <UserInfo type="email" name="" id="" placeholder="Phone number, username, or e-mail" />
      <UserInfo type="password" name="" id="" placeholder="Password" />
      <button type="submit">
Login / Creat Account
      </button>
    </div>
  );
}

const UserInfo = styled.input`
  width: 100%;
  height: 30px;
  text-align: center;
  background: #eee;
  color: #444;
  border-radius: 10px;
  margin-top: 25px;
`;
