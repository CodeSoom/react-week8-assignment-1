import React from 'react';

import TextField from './TextField';
import Button from './Button';

const LoginForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange({ name, value }) {
    onChange({ name, value });
  }

  return (
    <>
      <TextField
        label="E-mail"
        type="email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
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
