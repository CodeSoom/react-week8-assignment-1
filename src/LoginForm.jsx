import React from 'react';

import styled from '@emotion/styled';

import Button from './styles/Button';

const Input = styled.input({
  borderBottom: '1px solid #d12806',
  background: '#ede4c0',
  borderRadius: 10,
  marginTop: 5,
});

const Label = styled.label({
  fontSize: 17,
  fontWeight: 700,
  paddingRight: 10,
});

const LoginFormBackground = styled.div({
  width: 200,
});

const LoginForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <LoginFormBackground>
      <div>
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
      </div>
      <div>
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
      </div>
      <Button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </Button>
      <Button
        type="button"
        onClick={onSubmit}
      >
        Sign Up
      </Button>
    </LoginFormBackground>
  );
});

export default LoginForm;
