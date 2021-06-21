import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import MenuList from './MenuList';

const Item = styled.li({
  marginRight: '1em',
  '& a': {
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
    },
  },

});

const Title = styled.h1({
  fontSize: '2.5em',
  padding: '.5em',
});

export default function HomePage() {
  return (
    <div>
      <Title>Home</Title>
      <MenuList>
        <Item><Link to="/about">About</Link></Item>
        <Item><Link to="/login">Log in</Link></Item>
        <Item><Link to="/restaurants">Restaurants</Link></Item>
        <Item><Link to="/xxx">멸망의 길</Link></Item>
      </MenuList>
    </div>
  );
}
