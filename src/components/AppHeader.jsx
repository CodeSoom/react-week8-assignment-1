import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import NavBar from './NavBar';

const Header = styled.header({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  padding: '1rem 3rem',
  borderBottom: '2px solid #dddddd',
});

const Logo = styled.h1({
  fontSize: '3rem',
});

export default function AppHeader() {
  return (
    <Header>
      <Logo>
        <Link to="/">Eat Go</Link>
      </Logo>

      <NavBar />
    </Header>
  );
}
