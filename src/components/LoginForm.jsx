import React, { useCallback } from 'react';

import { LoginInput, LoginButton } from '../styles';

function LoginForm({ fields, onChange, onSubmit }) {
  const { email, password } = fields;

  const handleChange = useCallback((event) => {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }, [onchange]);

  return (
    <>
      <LoginInput>
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
      </LoginInput>
      <LoginInput>
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
      </LoginInput>
      <LoginButton
        type="button"
        onClick={onSubmit}
      >
        Log In
      </LoginButton>
    </>
  );
}

export default React.memo(LoginForm);
