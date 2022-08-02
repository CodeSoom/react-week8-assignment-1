import { useHistory } from 'react-router-dom';

import RegionsContainer from '../regions/RegionsContainer';
import CategoriesContainer from '../categories/CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

export default function RestaurantsPage() {
  const history = useHistory();

  function handleClickRestaurant(restaurant) {
    const url = `/restaurants/${restaurant.id}`;
    history.push(url);
  }

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer onClickRestaurant={handleClickRestaurant} />
    </div>
  );
}
