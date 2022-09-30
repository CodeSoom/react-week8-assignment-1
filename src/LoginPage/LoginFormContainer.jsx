import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

import {
  changeLoginField,
  requestLogin,
  deleteAccessToken,
} from './loginSlice';

import { get } from '../utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get({
    page: 'login',
    key: 'loginFields',
  }));

  const accessToken = useSelector(get({
    page: 'login',
    key: 'accessToken',
  }));

  const handleChange = useCallback(({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  }, [dispatch]);

  const handleSubmit = useCallback(() => {
    dispatch(requestLogin());
  }, [dispatch]);

  const handleClickLogout = useCallback(() => {
    dispatch(deleteAccessToken());
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
