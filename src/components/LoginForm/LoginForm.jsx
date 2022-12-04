import styled from '@emotion/styled';

import { memo } from 'react';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '400px',
  margin: '16px auto',
});

const Label = styled.label({
  fontSize: '20px',
  fontFamily: 'Roboto',
});

const Input = styled.input({
  width: '70%',
  padding: '4px',
});

const Button = styled.button({
  display: 'block',
  width: '180px',
  padding: '12px 16px',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#ffffff',
  margin: '24px auto',
  backgroundColor: '#A30F0F',
  borderRadius: '5px',
  border: '1px solid #A30F0F',
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
          placeholder="Email"
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
          placeholder='Password'
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
