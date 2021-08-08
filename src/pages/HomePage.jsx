import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import MenuList from '../components/MenuList';
import MenuItem from '../components/MenuItem';

const Title = styled.h1({
  fontSize: '2.5em',
  padding: '.5em',
});

export default function HomePage() {
  return (
    <div>
      <Title>Home</Title>
      <MenuList>
        <MenuItem><Link to="/about">About</Link></MenuItem>
        <MenuItem><Link to="/login">Log in</Link></MenuItem>
        <MenuItem><Link to="/restaurants">Restaurants</Link></MenuItem>
        <MenuItem><Link to="/xxx">멸망의 길</Link></MenuItem>
      </MenuList>
    </div>
  );
}
