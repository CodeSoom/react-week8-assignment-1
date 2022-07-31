import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  changeLoginField,
  logout,
  requestLogin,
  selectAccessToken,
  selectLoginError,
  selectLoginFields,
} from '@/store/authSlice';

import LoginForm from '../LoginForm';
import LogoutForm from '../LogoutForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(selectLoginFields);
  const accessToken = useSelector(selectAccessToken);
  const loginError = useSelector(selectLoginError);

  const handleChange = useCallback(({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  }, [dispatch]);

  const handleSubmit = useCallback(() => {
    dispatch(requestLogin());
  }, [dispatch]);

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
          error={loginError}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
}
