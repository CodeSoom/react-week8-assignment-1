import React, { useCallback } from 'react';

import { useSelector } from 'react-redux';

import { get } from '../utils';
import {
  List,
  Anchor,
  Image,
  RestaurantWrapper,
  RestaurantName,
  RestaurantDescription,
} from '../layouts/Restaurants';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));
  const selectedRegion = useSelector(get('selectedRegion'));
  const selectedCategory = useSelector(get('selectedCategory'));

  const handleClick = useCallback((restaurant) => (event) => {
    event.preventDefault();
    onClickRestaurant(restaurant);
  }, []);

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <List key={restaurant.id}>
          <Anchor href="/restaurants/1" onClick={handleClick(restaurant)}>
            <Image src="https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking.jpg" alt={restaurant.name} />
            <RestaurantWrapper>
              <RestaurantName>{restaurant.name}</RestaurantName>
              <RestaurantDescription>
                {selectedRegion.name}
                ,
                {' '}
                {selectedCategory.name}
              </RestaurantDescription>
              <RestaurantDescription>
                {restaurant.information}
              </RestaurantDescription>
              <RestaurantDescription>
                {restaurant.address}
              </RestaurantDescription>
            </RestaurantWrapper>
          </Anchor>
        </List>
      ))}
    </ul>
  );
}
