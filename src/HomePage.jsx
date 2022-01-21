import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import Container from './styles/Container';
import MenuList from './styles/MenuList';
import MenuItems from './styles/MenuItems';

const Box = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export default function HomePage() {
  return (
    <Container>
      <MenuList>
        <MenuItems><Link to="/about">About</Link></MenuItems>
        <MenuItems><Link to="/restaurants">Restaurants</Link></MenuItems>
        <MenuItems><Link to="/login">Sign in</Link></MenuItems>
      </MenuList>
      <Box>
        <h2>반갑습니다! 메뉴를 골라주세요 ☺️</h2>
      </Box>
    </Container>
  );
}
