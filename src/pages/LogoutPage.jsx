import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import {
  logout,
} from '../redux/slice';

export default function LogoutPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
    return history.push('/login');
  });

  return (
    <>
    </>
  );
}
