import React from 'react';

import styled from '@emotion/styled';

import SubmitButton from './SubmitButton';

const TextField = styled.div({
  '& label': {
    fontcolor: '#000',
    fontSize: '1.2em',
    display: 'block',
    marginBottom: '0.5em',
  },
  '& input': {
    fontcolor: '#000',
    fontSize: '1.2em',
    height: '2em',
    width: '100%',
    border: 'none',
  },
});

const LoginForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <TextField>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </TextField>
      <TextField>
        <label htmlFor="login-password">
          Password
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </TextField>
      <SubmitButton
        type="button"
        onClick={onSubmit}
      >
        Log In
      </SubmitButton>
    </>
  );
});

export default LoginForm;
