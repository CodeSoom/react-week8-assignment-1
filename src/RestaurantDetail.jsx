import React from 'react';

import styled from '@emotion/styled';
import MenuItems from './MenuItems';

import green from '../fixtures/color';
import { PageTop } from './style/layout';

const RestaurantDetailTop = styled(PageTop)({
  padding: '3rem 5rem 3rem 50%',
  background: '#f4f7f8 url(/public/eat.png) no-repeat 0 38% / 45%',
  h2: {
    textAlign: 'left',
  },
});

const Address = styled.p({
  fontSize: '1.3rem',
  color: `${green}`,
});

const MenuWrap = styled.div({
  marginTop: '3rem',
});

function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <RestaurantDetailTop>
      <div>
        <h2>{name}</h2>
        <Address>
          주소 :
          {' '}
          {address}
        </Address>
        <MenuWrap>
          <h3>메뉴</h3>
          <MenuItems menuItems={menuItems} />
        </MenuWrap>
      </div>
    </RestaurantDetailTop>
  );
}

export default React.memo(RestaurantDetail);
