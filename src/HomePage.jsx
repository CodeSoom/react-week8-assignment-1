import { Link } from 'react-router-dom';

import styled from '@emotion/styled';
import Menu from './Menu';
import MenuItem from './MenuItem';

const Title = styled.h2({
  fontSize: '2em',
  margin: 0,
  padding: '0.4em 0',
});

export default function HomePage() {
  return (
    <div>
      <Title>Home</Title>
      <Menu>
        <MenuItem>
          <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/login">Log in</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/restaurants">Restaurants</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/xxx">멸망의 길</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
