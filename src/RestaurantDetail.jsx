import React from 'react';

import styled from '@emotion/styled';

import colors from './style/colors';

import MenuItems from './MenuItems';

const Card = styled.div({
  width: '80%',
  margin: '0 auto',
});

const Name = styled.h2({
  margin: '1.5em auto',
  color: `${colors.text_secondary}`,
  textAlign: 'center',
});

const Address = styled.p({
  margin: '.1em auto',
  padding: '0 15em',
  color: `${colors.text_primary}`,
  fontSize: '.5em',
  textAlign: 'right',
});

const Menu = styled.h3({
  margin: '3em auto',
  padding: '1em 5em',
  borderTop: `${colors.border_green} solid 1px`,
  color: `${colors.text_secondary}`,
  fontSize: '1em',
});

function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <Card>
      <Name>{name}</Name>
      <Address>
        주소:
        {' '}
        {address}
      </Address>
      <Menu>메뉴</Menu>
      <MenuItems menuItems={menuItems} />
    </Card>
  );
}

export default React.memo(RestaurantDetail);
