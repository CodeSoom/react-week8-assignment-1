import React, { useCallback } from 'react';

import styled from '@emotion/styled';

import Button from './Button';

const Input = styled.input({
  fontFamily: 'Raleway',
  fontSize: '18px',
  backgroundColor: 'orange',
  position: 'relative',
  top: '12px',
  padding: '15px 0',
  border: 'none',
  borderBottom: '2px solid black',
  margin: '0 0 25px 20px',
  transition: 'border-color 0.3s ease-in-out',
  '&:focus': {
    borderColor: 'teal',
    outline: 'none',
  },
});

const InputField = styled.div({
  fontSize: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 15px',
  margin: '40px 0 40px 0',
});

const LoginForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  const handleChange = useCallback((event) => {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }, [onChange]);

  return (
    <>
      <InputField>
        <label htmlFor="login-email">
          E-mail
        </label>
        <Input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </InputField>
      <InputField>
        <label htmlFor="login-password">
          Password
        </label>
        <Input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </InputField>
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
