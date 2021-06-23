import styled from '@emotion/styled';

import Container from './style/Container';
import Title from './style/Title';

import MenuItems from './MenuItems';

const Address = styled.p({
  fontsize: '.4em',
  margin: '.5em 0',
  padding: '.5em 4em',
  color: '#55462b',
});

const MenuTitle = styled.h3({
  borderTop: '#e8e8c5 solid 1px',
  fontsize: '1em',
  margin: '1em 0',
  padding: '1em 3em',
  color: '#311800',
});

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <Container>
      <Title>{name}</Title>
      <Address>
        주소:
        {' '}
        {address}
      </Address>
      <MenuTitle>메뉴</MenuTitle>
      <MenuItems menuItems={menuItems} />
    </Container>
  );
}
