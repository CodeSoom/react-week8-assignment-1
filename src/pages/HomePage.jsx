import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { get } from '../utils/utils';

import Menu from '../styles/Menu';
import List from '../styles/List';
import Item from '../styles/Item';

export default function HomePage() {
  const accessToken = useSelector(get('accessToken'));

  return (
    <Menu>
      <List>
        <Item>
          <Link to="/">About</Link>
        </Item>
        <Item>
          {
            accessToken
              ? <Link to="/logout">Log Out</Link>
              : <Link to="/login">Log In</Link>
          }
        </Item>
        <Item>
          <Link to="/restaurants">Restaurants</Link>
        </Item>
        <Item>
          <Link to="/xxx">멸망의 길</Link>
        </Item>
      </List>
    </Menu>
  );
}
