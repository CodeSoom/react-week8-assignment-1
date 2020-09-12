import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from '../presentationals/LoginForm';
import LogoutForm from '../presentationals/common/LogoutForm';

import {
  changeLoginField,
  requestLogin,
  logout,
} from '../common/slice';

import { get } from '../common/utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  const handleSubmit = () => {
    dispatch(requestLogin());
  };

  const handleClickLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {accessToken ? (
        <LogoutForm onClick={handleClickLogout} />
      ) : (
        <LoginForm
          fields={loginFields}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}
