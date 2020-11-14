import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Wrapper = styled.header({
  display: 'flex',
  height: '80px',
  borderBottom: '1px solid #dedede',
});

const Logo = styled.h1({
  display: 'flex',
  alignItems: 'center',
  width: '300px',
  height: '80px',
  marginLeft: '15px',
  fontSize: '30px',
});

const List = styled.ul({
  overflow: 'hidden',
  flexGrow: '1',
  height: '80px',
  lineHeight: '80px',
  padding: '0 40px',
  borderLeft: '1px solid #dedede',
});

const ItemLeft = styled.li({
  float: 'left',
  marginRight: '20px',
  listStyle: 'none',
});

const ItemRight = styled.li({
  float: 'right',
  listStyle: 'none',
});

export default function Header() {
  return (
    <Wrapper>
      <Logo>
        <Link to="/">Eat-GO</Link>
      </Logo>

      <List>
        <ItemLeft><Link to="/restaurants">Restaurants</Link></ItemLeft>
        <ItemLeft><Link to="/about">About</Link></ItemLeft>
        <ItemRight><Link to="/login">Log in</Link></ItemRight>
      </List>
    </Wrapper>
  );
}
