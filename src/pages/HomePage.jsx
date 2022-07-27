import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Menu = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

const Title = styled.h2({
  fontSize: '2em',
  margin: 0,
});

const Item = styled.li({
  marginRight: '1em',
  '& a': {
    color: '#333333',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000000',
    },
  },
});

export default function HomePage() {
  return (
    <div>
      <Title>Home</Title>
      <Menu>
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
      </Menu>
    </div>
  );
}
