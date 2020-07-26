import React from 'react';

import styled from '@emotion/styled';

import MenuItems from './MenuItems';

const Container = styled.div({
  margin: '0 auto',
  textAlign: 'center',
  width: '100%',
  '& h2': {
    fontcolor: '#fff',
  },
});

const MenuContainer = styled.div({
  margin: '0 auto',
  textAlign: 'center',
  width: '40%',
  border: '1px solid gainsboro',
  '& h3': {
    fontcolor: 'gray',
  },
});

function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <Container>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <MenuContainer>
        <h3>메뉴</h3>
        <MenuItems menuItems={menuItems} />
      </MenuContainer>
    </Container>
  );
}

export default React.memo(RestaurantDetail);
