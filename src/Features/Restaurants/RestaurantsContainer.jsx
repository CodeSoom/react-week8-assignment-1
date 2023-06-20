import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from '../../utils';

const RestaurantsList = styled.ul`
  margin-top:8rem;
`;

const Restaurant = styled.li`
  display: inline-block;
  border-radius: 10px;
  padding: 10px 23px;
  font-size: 3rem;
  background-color: #fff;
  color: #283c50;
  margin: 5px;
  font-weight: 700;
  &:hover{
    opacity:.7;
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: 500;
  color: #c7c7c7;
  margin: 3rem 0 0.7rem 0;
`;

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  return (
    <RestaurantsList>
      <Title>
        음식점을 누르면 리뷰와 평가를 볼 수 있어요.
      </Title>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id}>
          <a href="/restaurants/1" onClick={handleClick(restaurant)}>
            {restaurant.name}
          </a>
        </Restaurant>
      ))}
    </RestaurantsList>
  );
}
