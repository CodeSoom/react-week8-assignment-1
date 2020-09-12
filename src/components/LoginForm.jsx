import React, { useCallback } from 'react';

import { Input, Button } from '../styles';

function LoginForm({ fields, onChange, onSubmit }) {
  const { email, password } = fields;

  const handleChange = useCallback((event) => {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }, [onchange]);

  return (
    <>
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
    </>
  );
}

export default React.memo(LoginForm);
