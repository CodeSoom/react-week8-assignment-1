import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import Container from './styles/Container';

const List = styled.ul({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '24px',
  position: 'fixed',
  top: '100px',
});

const Item = styled.li({
  marginRight: '12px',
  backgroundColor: '#6d6d6d',
  borderRadius: '10px',
  padding: '12px 18px',
});

const Box = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export default function HomePage() {
  return (
    <Container>
      <List>
        <Item><Link to="/about">About</Link></Item>
        <Item><Link to="/restaurants">Restaurants</Link></Item>
        <Item><Link to="/login">Sign in</Link></Item>
      </List>
      <Box>
        <h2>반갑습니다! 메뉴를 골라주세요 ☺️</h2>
      </Box>
    </Container>
  );
}
