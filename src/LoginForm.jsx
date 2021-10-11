import { memo } from 'react';

import styled from '@emotion/styled';

const Form = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '.5em',
  '& input': {
    width: '10em',
    border: 'none',
    borderBottom: '1px solid black',
  },
});

const Button = styled.button({
  width: 'fit-content',
  marginBottom: '1em',
  border: 'none',
  borderRadius: '.3em',
  padding: '.3em',
  backgroundColor: '#EEE',
  cursor: 'pointer',
  '&:hover': {
    color: '#2ecc71',
  },
});

const LoginForm = memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <Form>
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
      </Form>
      <Form>
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
      </Form>
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
