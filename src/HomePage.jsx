import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import PageTitle from './PageTitle';
import Menu from './Menu';

const Container = styled.div({
  padding: '10px 5px',
});

const Item = styled.li({
  marginRight: '5px',
  padding: '10px',
  '& a': {
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
      color: '#2ecc71',
    },
  },
});

export default function HomePage() {
  return (
    <Container>
      <PageTitle>Home</PageTitle>
      <Menu>
        <Item><Link to="/about">About</Link></Item>
        <Item><Link to="/login">Log in</Link></Item>
        <Item><Link to="/restaurants">Restaurants</Link></Item>
        <Item><Link to="/xxx">멸망의 길</Link></Item>
      </Menu>
    </Container>
  );
}
