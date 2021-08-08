import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import colors from './style/colors';

import { get } from './utils';

const List = styled.ul({
  margin: '0 auto',
  padding: '5em 0',
  textAlign: 'center',
});

const Item = styled.li({
  display: 'inline-block',
  width: '20%',
  height: '10em',
  margin: '.5em 2.5em',
  fontSize: '.8em',
  textAlign: 'center',
  lineHeight: '10em',
  '& a': {
    color: `${colors.text_primary}`,
    '&:hover': {
      color: `${colors.text_secondary}`,
      fontWeight: '700',
    },
  },
});

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  return (
    <List>
      {restaurants.map((restaurant) => (
        <Item key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </Item>
      ))}
    </List>
  );
}
