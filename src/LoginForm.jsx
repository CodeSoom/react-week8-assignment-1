import styled from '@emotion/styled';
import { memo } from 'react';

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

const Button = styled.div({
  appearance: 'none',
  background: '#0d6efd',
  color: '#fff',
  margin: 0,
  padding: '8px 16px',
  fontSize: '16px',
  textAlign: 'center',
  border: 'none',
  borderRadius: '4px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  cursor: 'pointer',
  transition: '0.5s',
  ':active, :hover, :focus': {
    background: '#025ce2',
    outline: 0,
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
        type="button"
        onClick={onSubmit}
      >
        Log In
      </Button>
    </>
  );
});

export default LoginForm;
