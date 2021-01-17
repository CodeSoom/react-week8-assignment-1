import React from 'react';

import LoginArticle from './LoginArticle';
import LoginButton from './LoginButton';

const LoginForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <LoginArticle>
      <div>
        <label htmlFor="login-email">
          E-mail
        </label>
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          placeholder="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="login-password">
          Password
        </label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleChange}
        />
      </div>
      <LoginButton
        type="button"
        onClick={onSubmit}
      >
        Log In
      </LoginButton>
    </LoginArticle>
  );
});

export default LoginForm;
