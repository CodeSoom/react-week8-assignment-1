import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';

import {
  changeLoginField,
  requestLogin,
} from './loginSlice';

import { get } from '../utils';

export default function LoginFormContainer({ goHomePage }) {
  const dispatch = useDispatch();

  const loginFields = useSelector(get({
    page: 'login',
    key: 'loginFields',
  }));

  const handleChange = useCallback(({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  }, [dispatch]);

  const handleSubmit = useCallback(() => {
    dispatch(requestLogin());
    goHomePage();
  }, [dispatch]);

  return (
    <LoginForm
      fields={loginFields}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
