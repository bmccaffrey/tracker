import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledLink, Theme } from './Elements';

// TODO: -- store username in localStorage
// TODO: -- store password in localStorage
// TODO: -- set prop for LoggedIn
// TODO: -- create a PasswordReset Component
const Login = () => (
  <Fields>
    <Input type="email" name="" id="" placeholder="Phone number, username, or e-mail" />
    <Input type="password" name="" id="" placeholder="Password" />
    <Forget>
Forgot password?
    </Forget>
    <StyledLink to="/greeting">
      <Button type="submit">
Login / Creat Account
      </Button>
    </StyledLink>
  </Fields>
);

export default Login;

const Placeholder = Theme.extend`
  width: 100%;
  text-align: center;
  ::-webkit-input-placeholder {
    color: #444;
  }
`;

const Input = Placeholder.withComponent('input');
const Button = Placeholder.withComponent('button');

const Fields = styled.div`
  background: white;
  .User {
    background: #eee;
    border: 0;
    border-radius: 10px;
    color: #444;
    height: 30px;
    margin-top: 25px;
    padding: 0;
    text-align: center;
    width: 100%;
    ::-webkit-input-placeholder {
      color: #444;
    }
  }
`;

const Forget = styled.div`
  font-size: 0.75rem;
  text-align: right;
  margin-top: 10px;
`;
