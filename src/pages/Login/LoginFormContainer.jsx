import { useDispatch, useSelector } from 'react-redux';
import tw from 'twin.macro';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

import {
  changeLoginField,
  requestLogin,
  logout,
} from '../../store/slice';

import { get } from '../../utils/utils';

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

  const handleClickLogout = () => {
    dispatch(logout());
  };

  const Wrapper = tw.div`
    flex min-h-full items-center justify-center py-12 px-4
  `;

  const Div = tw.div`
    w-full max-w-md space-y-8
  `;

  return (
    <Wrapper>
      <Div>
        {accessToken ? (
          <LogoutForm onClick={handleClickLogout} />
        ) : (
          <LoginForm
            fields={loginFields}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        )}
      </Div>
    </Wrapper>
  );
}
