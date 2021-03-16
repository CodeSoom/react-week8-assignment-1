import React from 'react';

import styled from '@emotion/styled';

const Label = styled.label({
  display: 'none',
});
const Input = styled.input({
  width: '70%',
  height: '2.5rem',
  fontsize: '1.2rem',
  borderRadius: '1.2rem',
  marginBottom: '1rem',
});

const Button = styled.button({
  width: '70%',
  height: '2.5rem',
  borderRadius: '1.2rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  border: '0.2rem solid #f48c06',
  '&:hover': {
    backgroundColor: 'lightgray',
  },
});

const LoginForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <div>
        <Label htmlFor="login-email">
          E-mail
        </Label>
        <Input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="E-mail"
        />
      </div>
      <div>
        <Label htmlFor="login-password">
          Password
        </Label>
        <Input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
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
