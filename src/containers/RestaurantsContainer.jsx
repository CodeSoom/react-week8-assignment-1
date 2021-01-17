import React, { useCallback } from 'react';

import { useSelector } from 'react-redux';

import { get } from '../utils';
import {
  List,
  Anchor,
  Image,
  Wrapper,
  Name,
  Description,
} from '../layouts/Restaurants';

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));
  const selectedRegion = useSelector(get('selectedRegion'));
  const selectedCategory = useSelector(get('selectedCategory'));

  const handleClick = useCallback((restaurant) => (event) => {
    event.preventDefault();
    onClickRestaurant(restaurant);
  }, []);

  const sampleImageLink = 'https://www.foodiesfeed.com/wp-content/uploads/2019/02/pizza-ready-for-baking.jpg';

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <List key={restaurant.id}>
          <Anchor href="/restaurants/1" onClick={handleClick(restaurant)}>
            <Image src={sampleImageLink} alt={restaurant.name} />
            <Wrapper>
              <Name>{restaurant.name}</Name>
              <Description>
                {selectedRegion.name}
                ,
                {' '}
                {selectedCategory.name}
              </Description>
              <Description>
                {restaurant.information}
              </Description>
              <Description>
                {restaurant.address}
              </Description>
            </Wrapper>
          </Anchor>
        </List>
      ))}
    </ul>
  );
}
