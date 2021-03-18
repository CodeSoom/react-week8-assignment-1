import React from 'react';

import styled from '@emotion/styled';

import MenuItems from './MenuItems';

import { colors } from '../../styles/Theme';

const Address = styled.p({
  color: colors.gray,
});

const MenuWrapper = styled.div({
  margin: '1rem 0',
  padding: '0 .5rem',
});

const MenuTitle = styled.h3({
  fontWeight: '700',
});

const RestaurantDetail = React.memo(({ restaurant }) => {
  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h1>{name}</h1>
      <Address>
        주소:
        {' '}
        {address}
      </Address>
      <MenuWrapper>
        <MenuTitle>메뉴</MenuTitle>
        <MenuItems menuItems={menuItems} />
      </MenuWrapper>
    </div>
  );
});

export default RestaurantDetail;
