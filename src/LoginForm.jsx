import { memo } from 'react';

import styled from '@emotion/styled';

import FormContainer from './FormContainer';

const Container = styled.div({
  display: 'flex',
});

const LoginForm = (({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <Container>
      <div>
        <FormContainer>
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
        </FormContainer>
        <FormContainer>
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
        </FormContainer>
      </div>
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
