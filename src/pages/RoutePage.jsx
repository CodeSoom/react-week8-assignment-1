import React from 'react';

import { NavLink } from 'react-router-dom';

import { List, Item, Navigator } from '../styles';

export default function RoutePage() {
  const activeStyle = {
    fontWeight: 'bold',
    color: 'yellow',
  };

  return (
    <Navigator>
      <List>
        <Item>
          <NavLink
            to="/about"
            activeStyle={activeStyle}
          >
            About
          </NavLink>
        </Item>
        <Item>
          <NavLink
            to="/login"
            activeStyle={activeStyle}
          >
            Log in
          </NavLink>
        </Item>
        <Item>
          <NavLink
            to="/restaurants"
            activeStyle={activeStyle}
          >
            Restaurants
          </NavLink>
        </Item>
      </List>
    </Navigator>
  );
}
