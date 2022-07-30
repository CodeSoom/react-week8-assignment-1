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
      {loginError && <p>{loginError}</p>}
    </>
  );
}
