import { memo } from 'react';

import styled from '@emotion/styled';

const Button = styled.button`
  width:100%;
  padding:1rem 3rem;
  background-color:#FF5F00;
  color:#fff;
  margin-top: 20px;
  border-radius: 10px;
  &:hover{
    opacity:.7;
  }
`;

const LoginInput = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  & label{
    text-align: left;
    margin-bottom: 6px;
  }
  & input{
    border-radius: 7px;
    border: 1px solid #ddd;
    font-size: 2.5rem;
  }
`;

const LoginForm = memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <LoginInput>
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
      </LoginInput>
      <LoginInput>
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
      </LoginInput>
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
