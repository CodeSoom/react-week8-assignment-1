import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  regionsSelector,
  selectedRegionSelector,
  selectRegion,
  loadRegions,
} from './features/regions/regionsSlice';

import { loadRestaurants } from './features/restaurants/restaurantsSlice';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRegions());
  }, []);

  const regions = useSelector(regionsSelector);
  const selectedRegion = useSelector(selectedRegionSelector);

  function handleClick(regionId) {
    dispatch(selectRegion({ regionId }));
    dispatch(loadRestaurants());
  }

  if (!regions?.length) {
    return (
      <p>
        지역 목록을 조회하지 못했습니다.
      </p>
    );
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
