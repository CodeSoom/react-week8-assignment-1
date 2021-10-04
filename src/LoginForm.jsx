import { memo } from 'react';

import styled from '@emotion/styled';

import FormButton from './FormButton';

const Form = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '10px',
  '& input': {
    width: '150px',
    border: 'none',
    borderBottom: '1px solid black',
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
      <FormButton
        type="button"
        onClick={onSubmit}
      >
        Log In
      </FormButton>
    </>
  );
});

export default LoginForm;
