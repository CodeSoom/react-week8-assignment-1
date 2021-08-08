import { memo } from 'react';

import styled from '@emotion/styled';

import colors from './style/colors';
import Button from './style/Button';

const LoginBox = styled.div({
  width: '50%',
  height: '30%',
  margin: '0 auto',
  textAlign: 'center',
});

const InputBox = styled.div({
  padding: '.5em',
  textAlign: 'center',
});

const Label = styled.label({
  display: 'inline-block',
  width: '30%',
  padding: '.5em',
  color: `${colors.text_secondary}`,
  fontSize: '.9em',
  fontWeight: '700',
  textAlign: 'center',
});

const Input = styled.input({
  width: '40%',
  padding: '.2em .5em',
  outline: `${colors.button_gray010} auto 2px`,
  color: `${colors.button_gray020}`,
  fontSize: '.5em',
  fontWeight: '500',
});

const LoginForm = memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <LoginBox>
      <InputBox>
        <Label htmlFor="login-email">
          E-mail
        </Label>
        <Input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </InputBox>
      <InputBox>
        <Label htmlFor="login-password">
          Password
        </Label>
        <Input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </InputBox>
      <Button
        type="button"
        onClick={onSubmit}
      >
        Log In
      </Button>
    </LoginBox>
  );
});

export default LoginForm;
