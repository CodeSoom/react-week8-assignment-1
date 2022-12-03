import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const Nav = styled.header({
  width: '90%',
  margin: '0 auto',
  padding: '2rem 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Logo = styled.div({

});

const Navigation = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  listStyle: 'none',
});

const NavItem = styled.li({
  padding: '0 5rem',
  fontSize: '1.5rem',
  fontWeight: '500',

  '&:hover': {
    color: '#DB0816',
  },
});

export default function Header() {
  return (
    <Nav>
      <Logo>
        <Link to="/">
          <img src="../../img/logo.png" alt="eatGo-logo" />
        </Link>
      </Logo>
      <Navigation>
        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/restaurants">Restaurants</Link></NavItem>
        <NavItem><Link to="/login">Log in</Link></NavItem>
      </Navigation>
    </Nav>
  );
}
