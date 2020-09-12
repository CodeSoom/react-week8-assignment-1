import React from 'react';

import styled from '@emotion/styled';

const EmailLabel = styled.label((htmlFor) => ({
  marginRight: '2.4em',
  htmlFor,
}));

const PasswordLabel = styled.label((htmlFor) => ({
  htmlFor,
  marginRight: '1em',
}));

const Button = styled.button(() => ({
  display: 'table',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '2em',
  padding: '.4em 7em',
  border: '1px solid #CCC',
  color: '#333',
  background: '#EEE',
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    color: '#000',
    fontWeight: 'bold',
    background: 'palegreen',
  },
}));

const LoginForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <div>
        <EmailLabel htmlFor="login-email">
          E-mail
        </EmailLabel>
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <PasswordLabel htmlFor="login-password">
          Password
        </PasswordLabel>
        <input
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
    </>
  );
});
export default LoginForm;
