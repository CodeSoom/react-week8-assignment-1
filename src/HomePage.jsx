import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import Container from './styles/Container';
import MenuItems from './styles/MenuItems';
import Information from './styles/Information';

const Menu = styled.ul({
  position: 'fixed',
  top: '100px',
});

export default function HomePage() {
  return (
    <Container>
      <Menu>
        <MenuItems><Link to="/about">About</Link></MenuItems>
        <MenuItems><Link to="/restaurants">Restaurants</Link></MenuItems>
        <MenuItems><Link to="/login">Sign in</Link></MenuItems>
      </Menu>
      <Information>반갑습니다! 메뉴를 골라주세요 ☺️</Information>
    </Container>
  );
}
