import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Container = styled.div({
  padding: '24px 18px',
});

const Title = styled.h2({
  marginBottom: '24px',
});

const List = styled.ul({
  display: 'flex',
});

const Item = styled.li({
  marginRight: '12px',
  backgroundColor: '#6d6d6d',
  borderRadius: '10px',
  padding: '12px 18px',
});

export default function HomePage() {
  return (
    <Container>
      <Title>반갑습니다! 메뉴를 골라주세요 ☺️</Title>
      <List>
        <Item><Link to="/about">About</Link></Item>
        <Item><Link to="/restaurants">Restaurants</Link></Item>
        <Item><Link to="/login">Log in</Link></Item>
      </List>
    </Container>
  );
}
