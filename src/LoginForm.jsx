import React from 'react';

import {
  InputWrapper, Container,
  Label, Input, Button,
} from './InputStyles';

const LoginForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <InputWrapper>
        <div>
          <Label htmlFor="login-email">
            E-mail
          </Label>
          <Container>
            <Input
              type="email"
              id="login-email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </Container>
        </div>
        <div>
          <Label htmlFor="login-password">
            Password
          </Label>
          <Container>
            <Input
              type="password"
              id="login-password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Container>
        </div>

        <Button
          type="button"
          onClick={onSubmit}
        >
          Log In
        </Button>
      </InputWrapper>
    </>
  );
});

export default LoginForm;
