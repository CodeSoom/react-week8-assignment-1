import { memo } from 'react';

import TextField from './TextField';

const LoginForm = memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  return (
    <>
      <TextField
        label="E-mail"
        type="email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </button>
    </>
  );
});

export default LoginForm;
