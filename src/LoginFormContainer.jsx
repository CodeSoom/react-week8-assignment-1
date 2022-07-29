import { useDispatch, useSelector } from 'react-redux';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

import {
  accessTokenSelector,
  loginFieldsSelector,
  changeFields,
  requestLogin,
} from './features/login/loginSlice';

import {
  logout,
} from './actions';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const loginFields = useSelector(loginFieldsSelector);

  const accessToken = useSelector(accessTokenSelector);

  const handleChange = ({ name, value }) => {
    dispatch(changeFields({ name, value }));
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
