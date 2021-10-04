import { memo } from 'react';

import FormButton from './FormButton';
import InputForm from './InputForm';

const LoginForm = memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <InputForm>
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
      </InputForm>
      <InputForm>
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
      </InputForm>
      <FormButton
        type="button"
        onClick={onSubmit}
      >
        Log In
      </FormButton>
    </>
  );
});

export default LoginForm;
