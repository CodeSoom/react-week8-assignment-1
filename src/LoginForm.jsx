import React from 'react';

import styled from '@emotion/styled';

import Button from './Button';

const Form = styled.div({
  width: '90%',
  margin: '0 auto',
});

const FormGroup = styled.div({
  label: {
    fontWeight: 'bold',
    fontSize: '1.2em',
    color: '#364f6b',
  },
  input: {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box',
    border: '3px solid #364f6b',
    '&:focus': {
      border: '3px solid #3fc1c9',
      outline: 'none',
    },
  },
});

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
