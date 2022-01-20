import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

import { changeLoginField, requestLogin, logout } from './slice';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  // 새로운 객체를 만들어서 가져오지 않고 객체 참조값을 그대로 가져와주고 있다
  // 그러므로 loginFields는 변경점이 있을때만 갱신된다
  const loginFields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  const handleChange = useCallback(({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  }, []);

  const handleSubmit = useCallback(() => {
    dispatch(requestLogin());
  }, []);

  const handleClickLogout = useCallback(() => {
    dispatch(logout());
  }, []);

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
