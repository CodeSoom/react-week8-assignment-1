import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Title = styled.h2({
  fontsize: '1.5em',
});

const Container = styled.div({
  padding: '10px 5px',
});

const List = styled.ul({
  margin: '0',
  padding: '0',
  display: 'flex',
  listStyle: 'none',
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
      <Title>Home</Title>
      <List>
        <Item><Link to="/about">About</Link></Item>
        <Item><Link to="/login">Log in</Link></Item>
        <Item><Link to="/restaurants">Restaurants</Link></Item>
        <Item><Link to="/xxx">멸망의 길</Link></Item>
      </List>
    </Container>
  );
}
