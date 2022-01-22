import { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { Card, ListGroup } from 'react-bootstrap';
import { css } from '@emotion/css';
import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from './store/actions';

export default function RestaurantsPage() {
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  function handleClickRestaurant(restaurant) {
    const url = `/restaurants/${restaurant.id}`;
    history.push(url);
  }

  return (
    <Card className={css`
      max-width: 1024px;
      margin: 20px auto;
    `}
    >
      <Card.Body>
        <ListGroup>
          <ListGroup.Item>
            <RegionsContainer />
          </ListGroup.Item>
          <ListGroup.Item>
            <CategoriesContainer />
          </ListGroup.Item>
          <ListGroup.Item>
            <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
