import { memo } from 'react';

import styled from '@emotion/styled';

import Container from './style/Container';
import LogButton from './style/LogButton';

const LoginContainer = styled.div({
  padding: '.5em 4em',
});

const Label = styled.label({
  textAlign: 'center',
  display: 'inline-block',
  width: '90px',
  fontsize: '.5em',
  fontWeight: '700',
  padding: '.5em',
  color: '#202a09',
});

const Input = styled.input({
  color: '#777a75',
  outline: '#d8ddbe auto 2px',
  fontWeight: '500',
  padding: '.2em .5em',
});

const LoginForm = memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <Container>
      <LoginContainer>
        <Label htmlFor="login-email">
          E-mail
        </Label>
        <Input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </LoginContainer>
      <LoginContainer>
        <Label htmlFor="login-password">
          Password
        </Label>
        <Input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </LoginContainer>
      <LogButton
        type="button"
        onClick={onSubmit}
      >
        Log In
      </LogButton>
    </Container>
  );
});

export default LoginForm;
