import styled from '@emotion/styled';
import { memo } from 'react';

import Button from './Button';

const TextField = styled.div({
  marginBottom: '10px',
  '& label': {
    marginRight: '10px',
  },
  '& input': {
    outline: 'none',
    border: 'none',
    borderBottom: '1px solid #222',
  },
});

const LoginForm = memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <TextField>
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
      </TextField>
      <TextField>
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
      </TextField>
      <Button
        background="#0d6efd"
        hoverBackground="#025ce2"
        type="button"
        onClick={onSubmit}
      >
        Log In
      </Button>
    </>
  );
});

export default LoginForm;
