import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  selectRegions,
  selectSelectedRegion,
} from '@/store/regionsSlice';
import { loadRestaurants } from '@/store/restaurantsSlice';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(selectRegions);
  const selectedRegion = useSelector(selectSelectedRegion);

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
