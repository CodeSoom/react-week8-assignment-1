import React from 'react';

import RestaurantDetail from './RestaurantDetail';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

import Layout from '../styles/Layout';

export default function Restaurant({
  restaurant, accessToken, reviewFields,
  handleChange, handleSubmit,
}) {
  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <Layout>
      <div>
        <RestaurantDetail restaurant={restaurant} />
        {accessToken ? (
          <ReviewForm
            fields={reviewFields}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        ) : null}
      </div>
      <Reviews reviews={restaurant.reviews} />
    </Layout>
  );
}
