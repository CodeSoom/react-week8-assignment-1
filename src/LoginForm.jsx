import React from 'react';

import styled from '@emotion/styled';

const InputContainer = styled.div({
  width: '500px',
  margin: '0 auto',
  padding: '30px 20px',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  boxShadow: '0px 0px 5px white',
  borderRadius: '5px',
})

const InputComponent = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '5px 15%',
})

const Label = styled.label({
  fontSize: '25px',
  fontWeight: '600',
  color: '#F9FDFC',
  marginRight: '20px',
  '&:hover': {
    color: '#5B4230',
  },
})

const Input = styled.input({
  border: 'none',
  borderRadius: '5px',
  backgroundColor: 'rgba(230, 218, 212, 0.9)',
  border: '2px solid rgba(214, 200, 200, 0.5)',
  width: '200px',
  height: '25px',
  opacity: '0.7',
  '&:focus': {
    outline: '2px solid #5B4230',
  },
});

const LoginButton = styled.button({
  display: 'block',
  margin: '0 auto',
  marginTop: '20px',
  backgroundColor: 'rgba(230, 218, 212, 0.8)',
  padding: '5px 50px',
  borderRadius: '5px',
  fontWeight: '600',
  color: '#F9FDFC',
  fontSize: '30px',
  fontFamily: "'Tillana', cursive",
  border: '5px solid rgba(214, 200, 200, 0.5)',
  '&:hover': {
    color: '#5B4230',
  },
  '&:focus': {
    outline: '2px solid #5B4230',
  },
})

const LoginForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <InputContainer>
      <InputComponent>
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
      </InputComponent>
      <InputComponent>
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
      </InputComponent>
      <LoginButton
        type="button"
        onClick={onSubmit}
      >
        Log In
      </LoginButton>
    </InputContainer>
  );
});

export default LoginForm;
