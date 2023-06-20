import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Nav = styled.ul({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const NavItem = styled.li({
  padding: '0 4rem',
  fontSize: '1.7rem',
  fontWeight: '500',
  '& a': {
    display: 'block',
    '&:hover': {
      color: '#FF5F00',
    },
  },
});

export default function NavBar() {
  return (
    <Nav>
      <NavItem><Link to="/about">About</Link></NavItem>
      <NavItem><Link to="/restaurants">Restaurants</Link></NavItem>
      <NavItem><Link to="/login">Log in</Link></NavItem>
    </Nav>
  );
}
