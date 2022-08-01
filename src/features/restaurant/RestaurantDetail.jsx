import styled from '@emotion/styled';

import MenuItems from './MenuItems';

const Title = styled.h2({
  margin: '0 0 2rem 0',
  fontSize: '2rem',
});

const Address = styled.p({
  margin: '0 0 1rem 0',
  fontSize: '1.6rem',
});

const SubTitle = styled.h3({
  margin: '0 0 1rem 0',
  fontSize: '2rem',
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
      <SubTitle>메뉴</SubTitle>
      <MenuItems menuItems={menuItems} />
    </div>
  );
}
