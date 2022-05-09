import { Link } from 'react-router-dom';

import Title from './Title';
import MenuList from './MenuList';
import MenuItem from './MenuItem';

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
