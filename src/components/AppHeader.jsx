import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const Header = styled.header({
  backgroundColor: '#898AA6',
  padding: '1rem 3rem',
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
    </Header>
  );
}
