import React from 'react';

import styled from '@emotion/styled';

import Container from './styles/Container';
import MenuItems from './MenuItems';

import { colors } from './designSystem';

const Content = styled.div({
  margin: '1em 0',
  '& h1': {
    color: colors.highlight,
  },
  '& h3': {
    fontSize: '1.5em',
    marginTop: '1em',
  },
  '& p': {
    fontSize: '1.2em',
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
