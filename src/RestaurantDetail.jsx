import styled from '@emotion/styled';

import MenuItems from './MenuItems';
import Title from './Title';
import Paragraph from './Paragraph';

const Container = styled.div({
  margin: '1em',
});

const SubTitle = styled.h3({
  fontFamily: 'sans-serif',
});

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <Title>{name}</Title>
      <Container>
        <Paragraph>
          주소:
          {' '}
          {address}
        </Paragraph>
        <SubTitle>메뉴</SubTitle>
        <MenuItems menuItems={menuItems} />
      </Container>
    </div>
  );
}
