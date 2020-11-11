import React from 'react';

const Restaurants = ({ restaurants, onClick }) => (
  <ul>
    {restaurants.map((restaurant) => (
      <li key={restaurant.id}>
        <a href="/restaurants/1" onClick={onClick(restaurant)}>
          {restaurant.name}
        </a>
      </li>
    ))}
  </ul>
);

export default Restaurants;
