import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Header = styled.header({
  display: 'flex',
  flexGrow: '0',
  height: '80px',
  borderBottom: '1px solid #dedede',
});

const Logo = styled.h1({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '300px',
  height: '80px',
  paddingLeft: '30px',
  fontSize: '30px',
  color: '#34a3ff',
});

const List = styled.ul({
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  flexGrow: '1',
  height: '80px',
  lineHeight: '80px',
  padding: '0 40px',
  borderLeft: '1px solid #dedede',
});

const Item = styled.li(({ flexGrow = 0 }) => ({
  marginRight: '20px',
  flexGrow,
  listStyle: 'none',
  '&:last-of-type': {
    marginRight: '0',
  },
}));

const StyledLink = ({ to, children }) => (
  <Link
    to={to}
    style={{
      color: 'inherit',
      textDecoration: 'none',
    }}
  >
    {children}
  </Link>
);

export default Header;
export {
  Logo,
  List,
  Item,
  StyledLink,
};
