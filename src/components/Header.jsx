import React from 'react';

import styled from '@emotion/styled';

import HeaderItem from './HeaderItem';

import HeaderTitle from '../styles/HeaderTitle';
import HeaderTab from '../styles/HeaderTab';

const HeaderBox = styled.header({
  padding: '2% 2%',
  width: '100%',
  margin: 0,
  top: 0,
  left: 0,
});

export default function Header({ handleClickLink }) {
  return (
    <HeaderBox>
      <>
        <HeaderTitle>
          <HeaderItem
            item="Codesoom Eatgo"
            url="/"
            handleClick={handleClickLink}
          />
        </HeaderTitle>
      </>
      <>
        <HeaderTab>
          <HeaderItem
            item="About"
            url="/about"
            handleClick={handleClickLink}
          />
        </HeaderTab>
        <HeaderTab>
          <HeaderItem
            item="Restaurants"
            url="/restaurants"
            handleClick={handleClickLink}
          />
        </HeaderTab>
        <HeaderTab>
          <HeaderItem
            item="NotFound"
            url="/xxx"
            handleClick={handleClickLink}
          />
        </HeaderTab>
        <HeaderTab>
          <HeaderItem
            item="Log In"
            url="/login"
            handleClick={handleClickLink}
          />
        </HeaderTab>
      </>
    </HeaderBox>
  );
}
