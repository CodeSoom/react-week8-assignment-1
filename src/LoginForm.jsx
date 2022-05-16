import { memo } from 'react';

import styled from '@emotion/styled';

import TextField from './TextField';

const Container = styled.div({
  display: 'flex',
});

const LoginForm = (({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  return (
    <Container>
      <TextField
        label="E-mail"
        type="email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={password}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </button>
    </Container>
  );
});

export default memo(LoginForm);
