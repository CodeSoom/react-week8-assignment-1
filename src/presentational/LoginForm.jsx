import React from 'react';

import styled from '@emotion/styled';

import { InputBox } from '../styled';

const Container = styled.div({
  margin: '0 1em 0 1em',
  '& button': {
    display: 'block',
    width: '30%',
    padding: '1em',
    marginTop: '1em',
    backgroundColor: '#FF91AC',
    border: '0px solid',
    color: '#FFFFFF',
    borderRadius: ' 10px 1px ',
  },
});


const LoginForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <Container>
      <InputBox>
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
      </InputBox>
      <InputBox>
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
      </InputBox>
      <button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </button>
    </Container>
  );
});

export default LoginForm;
