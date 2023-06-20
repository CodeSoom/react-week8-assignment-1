import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';
import LogoutForm from '../LogoutForm/LogoutForm';

import {
  changeLoginField,
  requestLogin,
  logout,
} from '../../slice/loginSlice';

import { get } from '../../utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(get({ sliceName: 'loginSlice', key: 'loginFields' }));
  const accessToken = useSelector(get({ sliceName: 'loginSlice', key: 'accessToken' }));

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
