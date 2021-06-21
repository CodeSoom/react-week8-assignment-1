import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants } from './redux_modules/asyncActions';
import { selectRegion } from './redux_modules/restaurantSlice';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector((state) => state.restaurant.regions);
  const selectedRegion = useSelector((state) => state.restaurant.selectedRegion);

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <button
            type="button"
            onClick={() => handleClick(region.id)}
          >
            {region.name}
            {selectedRegion ? (
              <>
                {region.id === selectedRegion.id ? '(V)' : null}
              </>
            ) : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
