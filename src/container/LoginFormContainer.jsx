import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from 'presentational/LoginForm';
import LogoutForm from 'presentational/LogoutForm';

import {
  changeLoginField,
  requestLogin,
  logout,
} from '_redux/slice';

import { get } from 'utils';


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

  const handleClickLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

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
