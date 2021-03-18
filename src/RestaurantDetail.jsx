import React from 'react';

import styled from '@emotion/styled';

import MenuItems from './MenuItems';

import { colors } from './designSystem';

const Container = styled.div({
  padding: '2em 3em',
  margin: 0,
});

const Content = styled.div({
  margin: '1em 0',
  '& h1': {
    color: colors.highlight,
  },
  '& h3': {
    fontSize: '1.1em',
    marginTop: '1em',
  },
  '& p': {
    fontSize: '1em',
    marginTop: '1em',
  },
});

function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <Container>
      <Content>
        <h1>{name}</h1>
        <p>
          주소:
          {' '}
          {address}
        </p>
        <h3>메뉴</h3>
      </Content>
      <MenuItems menuItems={menuItems} />
    </Container>
  );
}

export default React.memo(RestaurantDetail);
