import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import NavBar from './NavBar';

const Header = styled.header({
  backgroundColor: '#fff',
  padding: '1em 0',
  height: '102px',
  '& div': {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    width: '90%',
  },
});

const Logo = styled.h1({
  color: 'transparent',
  width: '220px',
  '& a': {
    display: 'block',
  },
  '& img': {
    width: '100%',
    verticalAlign: 'top',
  },
});

export default function AppHeader() {
  return (
    <Header>
      <div>
        <Logo>
          <Link to="/">
            <img src="../../img/logo.png" alt="eatGo_logo" />
          </Link>
        </Logo>

        <NavBar />
      </div>
    </Header>
  );
}
