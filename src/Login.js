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
  background: #eee;
  border: 0;
  border-radius: 10px;
  color: #444;
  height: 30px;
  margin-top: 25px;
  padding: 0;
  text-align: center;
  width: 100%;
`;
