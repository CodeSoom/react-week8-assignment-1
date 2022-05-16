import styled from '@emotion/styled';

import MenuItems from './MenuItems';

const H2 = styled.h2({
  color: 'hotpink',
});

const P = styled.p({
  color: 'violet',
});

const H3 = styled.h3({
  color: 'rosybrown',
});

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <H2>{name}</H2>
      <P>
        주소:
        {' '}
        {address}
      </P>
      <H3>메뉴</H3>
      <MenuItems menuItems={menuItems} />
    </div>
  );
}
