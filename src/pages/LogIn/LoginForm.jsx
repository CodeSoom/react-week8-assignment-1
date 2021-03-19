import React from 'react';

import TextField from '../../components/TextField';

import { Button, FormWrapper } from '../../commons/components';

const LoginForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  return (
    <FormWrapper>
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

      <Button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </Button>
    </FormWrapper>
  );
});

export default LoginForm;
