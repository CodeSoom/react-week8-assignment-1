import { css } from '@emotion/css';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <Card className={css`
      max-width: 1024px;
      margin: 20px auto;
    `}
    >
      <RestaurantContainer restaurantId={id} />
    </Card>
  );
}
