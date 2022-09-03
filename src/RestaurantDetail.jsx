import styled from '@emotion/styled';

import MenuItems from './MenuItems';

const Title = styled.h2({
  fontSize: '40px',
  fontWeight: 'bold',
  marginBottom: '20px',
});

const Address = styled.p({
  marginBottom: '20px',
});

const Header = styled.h3({
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '10px',
});

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <Title>{name}</Title>
      <Address>
        주소:
        {' '}
        {address}
      </Address>
      <Header>메뉴</Header>
      <MenuItems menuItems={menuItems} />
    </div>
  );
}
