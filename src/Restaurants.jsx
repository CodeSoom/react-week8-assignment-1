import React from 'react';

import styled from '@emotion/styled';

import image from './images/sample.png';

const CardList = styled.ul({
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
});

const CardItem = styled.li({
  flexBasis: '30%',
  height: '150px',
  margin: '.5em',
  border: '1px solid #000',
  boxShadow: '3px 3px 5px 0px #9c9c9c',
  '& div': {
    display: 'grid',
    gridTemplateRows: '3fr 1fr',
    height: '100%',
    padding: 0,
    '& img': {
      width: '100%',
    },
    '& a': {
      alignSelf: 'center',
      color: 'black',
      fontWeight: 600,
      textDecoration: 'none',
      '&:hover': {
        color: '#333',
        textDecoration: 'underline',
      },
    },
  },
});

function Restaurants({ restaurants, onClick }) {
  return (
    <CardList>
      {restaurants.map((restaurant) => (
        <CardItem key={restaurant.id}>
          <div>
            <img src={image} alt={image} />
            <a href="/restaurants/1" onClick={onClick(restaurant)}>
              {restaurant.name}
            </a>
          </div>
        </CardItem>
      ))}
    </CardList>
  );
}

export default React.memo(Restaurants);
