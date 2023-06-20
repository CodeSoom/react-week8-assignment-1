import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from '../../utils';

import MenuTitle from '../../styles/MenuTitle';
import restaurantsList from '../../data/restaurantsList';

const RestaurantList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2rem;
`;

const RestaurantBox = styled.li`
  & a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
`;

const RestaurantDimmed = styled.div`
  width: 380px;
  height: 250px;
  padding: 2rem;
  background: linear-gradient(0deg, rgba(135,0,9,1) 0%, rgba(135,0,9,0) 100%);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  color: #ffffff;
  font-weight: 700;
  display: flex;
  align-items: flex-end;
  justify-content: end;
  
  &:hover {
    opacity: .8;
    transition: all linear .2s;
  }

  & p {
    margin: 0;
  }
`;

const RestaurantName = styled.div`
  font-size: 1.7rem;
  margin: 1rem 0;
`;

export default function RestaurantsContainer({ onClickRestaurant }) {
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurant) {
    return (event) => {
      event.preventDefault();
      onClickRestaurant(restaurant);
    };
  }

  if (!restaurants || restaurants.length === 0) {
    return null;
  }

  return (
    <>
      <MenuTitle>맛집</MenuTitle>
      <RestaurantList>
        {restaurants.map((restaurant, index) => (
          <RestaurantBox key={restaurant.id}>
            <a href="/restaurants/1" onClick={handleClick(restaurant)}>
              <RestaurantDimmed>
                <p>{restaurant.address}</p>
              </RestaurantDimmed>
              <div>
                <img alt="restaurant" src={restaurantsList[index]} />
              </div>

              <RestaurantName>
                {restaurant.name}
              </RestaurantName>
            </a>
          </RestaurantBox>
        ))}
      </RestaurantList>
    </>
  );
}
