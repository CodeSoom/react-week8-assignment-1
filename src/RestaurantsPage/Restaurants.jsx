import { memo } from 'react';

import styled from '@emotion/styled';

const restaurantImages = [
  'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',

  'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bm9vZGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',

  'https://images.unsplash.com/photo-1596560548464-f010549b84d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',

  'https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
];

const MenuList = styled.ul({
  display: 'flex',
  marginRight: '-34px',
  flexFlow: 'wrap',
  listStyle: 'none',
});

const MenuItem = styled.li(() => ({
  padding: '22px 34px 0 0',
  width: 'calc(100% / 4)',

  '& a': {
    width: '100%',
    color: '#555',
    fontSize: '16px',
    textDecoration: 'none',

    '&:hover': {
      color: '#000',
    },

    '& div': {
      height: '240px',
      overflow: 'hidden',
      marginBottom: '10px',

      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
    },
  },
}));

export default memo(({ restaurants, onClick }) => {
  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();

      onClick(restaurant);
    };
  }

  return (
    <MenuList>
      {restaurants.map((restaurant, index) => (
        <MenuItem key={restaurant.id}>
          <a
            href={`/restaurants/${restaurant.id}`}
            onClick={handleClick(restaurant)}
          >
            <div>
              <img alt="" src={restaurantImages[index]} />
            </div>
            {restaurant.name}
          </a>
        </MenuItem>
      ))}
    </MenuList>
  );
});
