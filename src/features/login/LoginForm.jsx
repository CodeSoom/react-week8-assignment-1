import styled from '@emotion/styled';

import { memo } from 'react';

const Container = styled.div({
  width: '50rem',
  margin: '0 auto',
});

const FormControl = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',

  '&:last-of-type': {
    marginBottom: 0,
  },
});

const Label = styled.label({
  marginRight: '0.5rem',
  color: '#000000',
  fontSize: '1.6rem',
  fontWeight: 'bold',
});

const Input = styled.input({
  flex: 1,
  padding: '0.5rem',
  border: '1px solid #000000',
  transition: 'all 0.5s',

  '&:focus': {
    outline: 'none',
    borderColor: '#868e96',
  },

  '&:hover': {
    borderColor: '#868e96',
  },
});

const Button = styled.button({
  display: 'block',
  margin: '1rem auto 0',
  padding: '0.75rem 0.75rem',
  width: '15rem',
  border: '2px solid #495057',
  borderRadius: '0.4rem',
  color: '#495057',
  fontSize: '1.6rem',
  fontWeight: 'bold',
  cursor: 'pointer',
});

const LoginForm = memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <Container>
      <FormControl>
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
      </FormControl>
      <FormControl>
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
      </FormControl>
      <Button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </Button>
    </Container>
  );
});

export default LoginForm;
