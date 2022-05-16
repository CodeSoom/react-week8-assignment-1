import { useDispatch, useSelector } from 'react-redux';

import LoginForm from '../../LoginForm';
import LogoutForm from '../../LogoutForm';

import {
  changeLoginField,
  requestLogin,
  logout,
  getLoginFields,
  getAccessToken,
} from './authSlice';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(getLoginFields);
  const accessToken = useSelector(getAccessToken);

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
