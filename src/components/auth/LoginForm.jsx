import React from 'react';

import styled from '@emotion/styled';

import palette from '../../styles/palette';
import Button from '../../styles/Button';

const LoginTemplateBlock = styled.div({
  position: 'absolute',
  left: '25rem',
  top: '10rem',
  bottom: '10rem',
  right: '25rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const LoginBox = styled.div({
  '& h2': {
    display: 'block',
    paddingTop: 0,
    paddingBottom: '1rem',
    textAlign: 'center',
    letterSpacing: '2px',
    fontSize: '30px',
  },
  '& label': {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  boxShadow: '0 0 8px rgba(0, 0, 0, 0.025)',
  padding: '2rem',
  width: '50%',
  height: '50%',
  background: palette.gray[1],
  borderRadius: '5px',
});

const LoginInput = styled.input({
  fontSize: '1rem',
  border: 'none',
  borderBottom: `2px solid ${palette.Teal[5]}`,
  padding: '.5rem 0 .5rem 0',
  outline: 'none',
  borderRadius: '2px',
  width: '100%',
  marginBottom: '1rem',
  '&:focus': {
    fontSize: '1.3rem',
    color: palette.gray[6],
    boxShadow: '3px 6px 6px rgba(0, 0, 0, 0.23)',
    padding: '.6rem 0 .6rem .5rem',
  },
});

const LoginForm = React.memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <LoginTemplateBlock>
      <LoginBox>
        <h2>로그인</h2>
        <div>
          <label htmlFor="login-email">
            E-mail
          </label>
          <LoginInput
            type="email"
            id="login-email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="login-password">
            Password
          </label>
          <LoginInput
            type="password"
            id="login-password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <Button
          type="button"
          onClick={onSubmit}
          fullWidth
        >
          Log In
        </Button>
      </LoginBox>
    </LoginTemplateBlock>
  );
});

export default LoginForm;
