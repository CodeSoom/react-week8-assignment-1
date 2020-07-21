import React from 'react';

import Form from './Form';
import FormGroup from './FormGroup';
import Button from './Button';

const LoginForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <Form>
      <FormGroup>
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
      </FormGroup>
      <FormGroup>
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
      </FormGroup>
      <Button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </Button>
    </Form>
  );
});

export default LoginForm;
