import React from 'react';
import styled from 'styled-components';
import { StyledLink, Theme, Input } from 'Elements';

const Button = styled.button`
  ${Theme()};
`;
const Forget = styled.div`
  font-size: 0.75rem;
  text-align: right;
  margin-top: 10px;
`;
const AppGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 25%);
  height: 100vh;
`;

// TODO: -- store username in localStorage
// TODO: -- store password in localStorage
// TODO: -- set prop for LoggedIn
// TODO: -- create a PasswordReset Component
const Login = () => (
  <AppGrid>
    <div />
    <div>
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
    </div>
  </AppGrid>
);

export default Login;
