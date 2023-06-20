import { memo } from 'react';

import styled from '@emotion/styled';

import Input from '../../styles/Input';
import { buttonStyle, inputStyle } from '../../styles/commonStyle';

const UserBox = styled.div({
  ...inputStyle,

  '&::before': {
    position: 'absolute',
    display: 'block',
    content: "''",
    background: 'url("../../img/icon/user-icon.png")',
    backgroundSize: 'cover',
    width: '24px',
    height: '24px',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
  },
});

const PasswordBox = styled.div({
  ...inputStyle,

  '&::before': {
    position: 'absolute',
    display: 'block',
    content: "''",
    background: 'url("../../img/icon/lock-icon.png")',
    backgroundSize: 'cover',
    width: '24px',
    height: '24px',
    top: '50%',
    left: '10px',
    transform: 'translateY(-50%)',
  },
});

const Label = styled.label({
  display: 'none',
});

const Button = styled.button({
  ...buttonStyle,
  width: '100%',
  height: '45px',
  marginTop: '10rem',
});

const LoginForm = memo(({ fields, onChange, onSubmit }) => {
  const { email, password } = fields;

  function handleChange(event) {
    const { target: { name, value } } = event;
    onChange({ name, value });
  }

  return (
    <>
      <UserBox>
        <Label htmlFor="login-email">
          E-mail
        </Label>
        <Input
          type="email"
          id="login-email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="아이디"
        />
      </UserBox>
      <PasswordBox>
        <Label htmlFor="login-password">
          Password
        </Label>
        <Input
          type="password"
          id="login-password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="비밀번호"
        />
      </PasswordBox>
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
