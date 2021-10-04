import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import PageTitle from './PageTitle';

const Container = styled.div({
  padding: '10px 5px',
});

const List = styled.ul({
  display: 'flex',
  listStyle: 'none',
  padding: '0',
  margin: '0',
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
      <List>
        <Item><Link to="/about">About</Link></Item>
        <Item><Link to="/login">Log in</Link></Item>
        <Item><Link to="/restaurants">Restaurants</Link></Item>
        <Item><Link to="/xxx">멸망의 길</Link></Item>
      </List>
    </Container>
  );
}
