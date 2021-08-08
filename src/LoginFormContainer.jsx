import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

import {
  changeLoginField,
  requestLogin,
  logout,
} from './slice';

import { get } from './utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get('loginFields'));
  const accessToken = useSelector(get('accessToken'));

  const handleChange = useCallback(({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  }, [dispatch]);

  const handleSubmit = useCallback(() => {
    dispatch(requestLogin());
  }, [dispatch]);

  // 질문: 이 아이는 굳이 메모리에 올려서 캐싱을 할 필요가 없어보이는데 트레이너님 의견은 어떠신가요?
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
