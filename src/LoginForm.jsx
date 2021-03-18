import React from 'react';

import styled from '@emotion/styled';

import { colors } from './designSystem';

const Box = styled.div({
  display: 'block',
  margin: '1em 0',
});

const Label = styled.label({
  fontSize: '1.2em',
  fontWeight: 'bold',
  marginRight: '.5em',
  padding: '1em .7em',
});

const Input = styled.input({
  fontSize: '1.2em',
  padding: '.7em',
  height: '1.5em',
  border: `1px solid ${colors.border}`,
  borderRadius: '5px',
});

const Button = styled.button({
  fontSize: '1em',
  display: 'block',
  margin: '0 1em',
  padding: '1em .7em',
  width: '40%',
  color: colors.white,
  border: `1px solid ${colors.highlight}`,
  borderRadius: '5px',
  background: colors.highlight,
});


const LoginForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <Box>
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
      </Box>
      <Box>
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
      </Box>
      <Button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </Button>
    </>
  );
});

export default LoginForm;
