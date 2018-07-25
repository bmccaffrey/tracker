import React, { Component } from 'react';
import styled from 'styled-components';

export default function Login() {
  return (
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
      <button type="submit" className="User">
        Login / Creat Account
      </button>
    </Fields>
  );
}

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
  float: right;
  margin-top: 25px;
`;
