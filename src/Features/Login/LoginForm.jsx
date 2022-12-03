import { memo } from 'react';

import styled from '@emotion/styled';

const UserBox = styled.div`
  width: 100%;
  height: 45px;
  margin: .5rem 0;
  border: 1px solid #4d4d4d;
  padding-left: 5rem;
  box-sizing: border-box;
  position: relative;

  &::before {
    position: absolute;
    display: block;
    content: '';
    background: url('../../img/icon/user-icon.png');
    background-size: cover;
    width: 24px;
    height: 24px;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
`;

const PasswordBox = styled.div`
  width: 100%;
  height: 45px;
  margin: .5rem 0;
  border: 1px solid #4d4d4d;
  padding-left: 5rem;
  box-sizing: border-box;
  position: relative;

  &::before {
    position: absolute;
    display: block;
    content: '';
    background: url('../../img/icon/lock-icon.png');
    background-size: cover;
    width: 24px;
    height: 24px;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }
`;

const Label = styled.label`
  display: none;
`;

const Input = styled.input`
  width: 100%;
  height: 45px;
  border: none; 
  background: transparent;
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  margin-top: 10rem;
  color : #ffffff;
  background: #DB0816;
`;

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
