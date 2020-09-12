import React from 'react';

import LoginBox from '../styles/LoginBox';

import TextField from './TextField';

function LoginForm({ fields, onChange, onSubmit }) {
  const { email, password } = fields;

  return (
    <LoginBox>
      <h2>로그인</h2>
      <TextField
        label="E-mail"
        name="email"
        type="email"
        value={email}
        onChange={onChange}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={password}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </button>
    </LoginBox>
  );
}

export default React.memo(LoginForm);
