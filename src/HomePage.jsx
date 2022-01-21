import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Title = styled.h2({
  margin: 0,
  fontSize: '2em',
  padding: '.4em 0',
});

const List = styled.ul({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
});

const Item = styled.li({
  marginRight: '1em',
  '& a': {
    color: '#333',
    textDecoration: 'none',
  },
  '& a:hover': {
    fontWeight: 'bold',
    color: '#000',
  },
});

export default function HomePage() {
  const lists = [
    ['/about', 'About'],
    ['/login', 'Login'],
    ['/restaurants', 'Restaurants'],
    ['/xxx', '멸망의 길'],
  ];

  return (
    <div>
      <Title>Home</Title>
      <List>
        {lists.map((list) => (
          <Item>
            <Link to={list[0]}>{list[1]}</Link>
          </Item>
        ))}
      </List>
    </div>
  );
}
