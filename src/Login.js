import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => (
  <Fields>
    <input
      type="email"
      name=""
      id=""
      placeholder="Phone number, username, or e-mail"
      className="User"
    />
    <input type="password" name="" id="" placeholder="Password" className="User" />
    <Forget>
Forgot password?
    </Forget>
    <Link to="/greeting">
      <button type="submit" className="User">
        Login / Creat Account
      </button>
    </Link>
  </Fields>
);

export default Login;

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
