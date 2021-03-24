import React from 'react';

import styled from '@emotion/styled';
import MenuItems from './MenuItems';

import green from '../fixtures/color';
import { PageTop } from './style/layout';

const RestaurantDetailTop = styled(PageTop)({
  padding: '3rem 20rem',
  background: '#f4f7f8',
  h2: {
    justifyContent: 'center',
    marginBottom: '0.2em',
  },
});

const Address = styled.p({
  fontSize: '1.3rem',
  color: `${green}`,
  textAlign: 'center',
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
          {/* <h3>메뉴</h3> */}
          <MenuItems menuItems={menuItems} />
        </MenuWrap>
      </div>
    </RestaurantDetailTop>
  );
}

export default React.memo(RestaurantDetail);
