import React from 'react';

import { NavLink, Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { get } from '../utils';

import {
  List,
  Item,
  ItemList,
  constants,
} from '../styles';

export default function RoutePage() {
  const activeStyle = {
    fontWeight: 'bold',
    color: constants.COLOR_LIGHT,
  };

  const accessToken = useSelector(get('accessToken'));

  return (
    <div>
      <List>
        <Item>
          <Link to="/">Eat_Go</Link>
        </Item>
        <ItemList>
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
              to="/restaurants"
              activeStyle={activeStyle}
            >
              Restaurants
            </NavLink>
          </Item>
          <Item>
            <NavLink
              to="/login"
              activeStyle={activeStyle}
            >
              {accessToken ? 'Log out' : 'Log in'}
            </NavLink>
          </Item>
        </ItemList>
      </List>
    </div>
  );
}
