import { memo } from 'react';

import TextField from '../components/TextField';

export default memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  return (
    <>
      <TextField
        label="E-mail"
        name="email"
        value={email}
        type="email"
        onChange={onChange}
      />
      <TextField
        label="Password"
        name="password"
        value={password}
        type="password"
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
