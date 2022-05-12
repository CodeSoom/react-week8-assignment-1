import { useDispatch, useSelector } from 'react-redux';
import RegionItem from '../../RegionItem';

import {
  selectRegion,
  loadRestaurants,
  getRegions,
  getSelectedRegions,
} from './restaurantsSlice';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(getRegions);
  const selectedRegion = useSelector(getSelectedRegions);

  function handleClick(regionId) {
    dispatch(selectRegion({ regionId }));
    dispatch(loadRestaurants());
  }

  return (
    <ul>
      {regions.map((region) => (
        <RegionItem
          key={region.id}
          region={region}
          onClick={handleClick}
          isSelected={selectedRegion?.id === region.id}
        />
      ))}
    </ul>
  );
}
