import { memo } from 'react';

import styled from '@emotion/styled';

const LoginForm = memo(({ fields, onChange, onSubmit }) => {
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
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="login-password">
          Password
        </Label>
        <input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <LoginButton
        type="button"
        onClick={onSubmit}
      >
        Log In
      </LoginButton>
    </>
  );
});

const Label = styled.label`
  display: inline-block;
  font-size: 1.2em;
  width: 5em;
`;

const LoginButton = styled.button`
  margin-top: 1em;
  padding: 0.5em 1.5em;
  border: 1px solid #000;
  border-radius: 5px;

  &:hover {
    color: #FFF;
    background-color: #000;
  }
`;

export default LoginForm;
