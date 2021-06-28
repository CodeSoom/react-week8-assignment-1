import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const List = styled.ul({
  margin: 0,
  padding: 0,
  display: 'flex',
  listStyle: 'none',
});

const Item = styled.li({
  marginRight: '1em',
  '& a': {
    color: '#333',
    textDecoration: 'none',
    '&:hover ': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
});

const Title = styled.h2({
  margin: 0,
  padding: '.4em',
  fontSize: '2em',
});

export default function HomePage() {
  return (
    <div>
      <Title>Home</Title>
      <List>
        <Item>
          <Link to="/about">About</Link>
        </Item>
        <Item>
          <Link to="/login">Log in</Link>
        </Item>
        <Item>
          <Link to="/restaurants">Restaurants</Link>
        </Item>
        <Item>
          <Link to="/xxx">멸망의 길</Link>
        </Item>
      </List>
    </div>
  );
}
