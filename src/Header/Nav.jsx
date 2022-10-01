import { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import LogoutForm from './LogoutForm';

import MenuList from '../styles/MenuList';

import {
  deleteAccessToken,
} from '../LoginPage/loginSlice';

import { get } from '../utils';

const NavItem = styled.li({
  fontSize: '1.2rem',

  '&:not(:first-of-type)': {
    marginLeft: '1em',
  },
});

export default function Nav({ onClick }) {
  const dispatch = useDispatch();

  const accessToken = useSelector(get({
    page: 'login',
    key: 'accessToken',
  }));

  const handleClickLogout = useCallback(() => {
    dispatch(deleteAccessToken());
  }, [dispatch]);

  function handleClick() {
    return (event) => {
      event.preventDefault();

      onClick(event.target.pathname);
    };
  }

  return (
    <nav>
      <MenuList>
        <NavItem>
          <a
            href="/about"
            onClick={handleClick()}
          >
            About
          </a>
        </NavItem>
        <NavItem>
          <a
            href="/restaurants"
            onClick={handleClick()}
          >
            Restaurants
          </a>
        </NavItem>
        <NavItem>
          {accessToken
            ? (<LogoutForm onClick={handleClickLogout} />)
            : (
              <a
                href="/login"
                onClick={handleClick()}
              >
                Log in
              </a>
            )}
        </NavItem>
      </MenuList>
    </nav>
  );
}
