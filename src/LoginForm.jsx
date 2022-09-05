import { memo } from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  marginBottom: '6px',
});

const Label = styled.label({
  display: 'inline-block',
  width: '75px',
  color: '#333',
});

const Input = styled.input({
  height: '25px',
  border: '1px solid #AAA',
  borderRadius: '3px',
});

const Button = styled.button({
  height: '30px',
  width: '220px',
  marginBottom: '20px',
});

const LoginForm = memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <Container>
        <Label htmlFor="login-email">
          E-mail
        </Label>
        <Input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Container>
      <Container>
        <Label htmlFor="login-password">
          Password
        </Label>
        <Input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </Container>
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
