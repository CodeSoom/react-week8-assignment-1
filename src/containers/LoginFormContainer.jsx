import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LoginForm from '../components/LoginForm';

import {
  changeLoginField,
  requestLogin,
} from '../redux/slice';

import { get } from '../utils/utils';

export default function LoginFormContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loginFields = useSelector(get('loginFields'));

  const handleChange = ({ name, value }) => {
    dispatch(changeLoginField({ name, value }));
  };

  const handleSubmit = () => {
    dispatch(requestLogin());
    return history.push('/restaurants');
  };

  return (
    <>
      <LoginForm
        fields={loginFields}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}
