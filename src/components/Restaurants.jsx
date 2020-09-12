import React from 'react';

import styled from '@emotion/styled';

import Layout from '../styles/Layout';
import List from '../styles/List';

const Item = styled.li({
  marginRight: '1em',
  '& a': {
    fontSize: '16px',
    color: 'white',
    padding: '.6em 2em',
    background: '#516EED',
    textDecoration: 'none',
    cursor: 'pointer',
    borderRadius: '10px',
    '&:hover': {
      fontWeight: 'bold',
      color: '#FFF',
    },
  },
});

export default function Restaurants({ restaurants, handleClick }) {
  return (
    <Layout>
      <List>
        {restaurants.map((restaurant) => (
          <Item key={restaurant.id}>
            <a
              href={`/restaurants/${restaurant.id}`}
              onClick={handleClick(restaurant)}
            >
              {restaurant.name}
            </a>
          </Item>
        ))}
      </List>
    </Layout>
  );
}
