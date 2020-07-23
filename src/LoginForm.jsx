import React from 'react';

import styled from '@emotion/styled';

import StyledSubmitButton from './StyledSubmitButton';


const StyledLoginForm = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '& > div': {
    marginBottom: '10px',
    label: {
      display: 'inline-block',
      width: '100px',

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
    <StyledLoginForm>
      <div>
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
      </div>
      <div>
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
      </div>
      <StyledSubmitButton
        type="button"
        onClick={onSubmit}
      >
        Log In
      </StyledSubmitButton>
    </StyledLoginForm>
  );
});

export default LoginForm;
