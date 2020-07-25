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
  const tabs = [
    { item: 'About', url: '/about' },
    { item: 'Restaurants', url: '/restaurants' },
    { item: 'NotFound', url: '/xxx' },
    { item: 'Log In', url: '/login' },
  ];

  return (
    <HeaderBox>
      <HeaderTitle>
        <HeaderItem
          item="Codesoom Eatgo"
          url="/"
          handleClick={handleClickLink}
        />
      </HeaderTitle>
      {
        tabs.map((tab) => (
          <HeaderTab key={tab.item}>
            <HeaderItem
              item={tab.item}
              url={tab.url}
              handleClick={handleClickLink}
            />
          </HeaderTab>
        ))
      }
    </HeaderBox>
  );
}
