import React from 'react';

import LoginBox from '../styles/LoginBox';
import Input from '../styles/Input';
import Button from '../styles/Button';

const LoginForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <LoginBox>
      <Input>
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
      </Input>
      <Input>
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
      </Input>
      <Button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </Button>
    </LoginBox>
  );
});

export default LoginForm;
