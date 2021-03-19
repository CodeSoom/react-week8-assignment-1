import React from 'react';

import styled from '@emotion/styled';

import MenuItems from './MenuItems';

import { colors } from '../../styles/Theme';

const RestaurantWrapper = styled.div({
  padding: '.5rem',
});

const Address = styled.p({
  color: colors.gray,
});

const MenuWrapper = styled.div({
  margin: '1rem 0',
});

const MenuTitle = styled.h3({
  fontWeight: '700',
});

const RestaurantDetail = React.memo(({ restaurant }) => {
  const { name, address, menuItems } = restaurant;

  return (
    <RestaurantWrapper>
      <h2>{name}</h2>
      <Address>
        주소:
        {' '}
        {address}
      </Address>
      <MenuWrapper>
        <MenuTitle>메뉴</MenuTitle>
        <MenuItems menuItems={menuItems} />
      </MenuWrapper>
    </RestaurantWrapper>
  );
});

export default RestaurantDetail;
