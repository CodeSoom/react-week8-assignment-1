import React from 'react';

import styled from '@emotion/styled';


const LoginForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  const Container = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  });

  const Label = styled.label({
    color: '#FFABAB',
    padding: '2em',
    marginRight: '2em',
  });

  const Input = styled.input({
    borderRadius: 5,
    borderColor: '#FFABAB',
  });

  const Button = styled.button({
    marginLeft: '2em',
    color: '#FFF5BA',
    backgroundColor: '#FFABAB',
    textDecoration: 'none',
    border: 0,
    borderRadius: 5,
    cursor: 'pointer',
  });

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
    </>
  );
});

export default LoginForm;
