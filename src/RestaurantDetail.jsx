import React from 'react';

import styled from '@emotion/styled';

import MenuItems from './MenuItems';

const Details = styled.div({
  margin: '1em',
  textAlign: 'center',
  backgroundColor: 'white',
  borderBottom: '3px solid #4CAF50',
  boxShadow: '2px 2px 5px #9E9E9E',
  '& h2': {
    margin: '1em 0 0 0',
    fontSize: '1.8em',
    letterSpacing: '.1em',
  },
  '& h3': {
    marginBottom: 0,
    fontSize: '1.5em',
    letterSpacing: '.2em',
  },
  '& hr': {
    margin: '0 auto',
    width: '20%',
  },
  '& p': {
    margin: '.5em',
    color: '#666',
  },
  '& ul': {
    padding: 0,
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
  },
});

function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <Details>
      <h2>{name}</h2>
      <p>
        {address}
      </p>
      <h3>대표메뉴</h3>
      <hr />
      <MenuItems menuItems={menuItems} />
    </Details>
  );
}

export default React.memo(RestaurantDetail);
