import styled from '@emotion/styled';
import MenuItems from './MenuItems';

const Container = styled.div({
  borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
  marginBottom: '15px',
});

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <Container>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />
    </Container>
  );
}
