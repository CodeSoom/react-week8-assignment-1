import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from '../slice';

import { get } from '../shared/utils';
import Button from '../shared/components/Button';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <ul>
      {regions.map((region) => (
        <li key={region.id}>
          <Button
            active={region.id === selectedRegion?.id}
            onClick={() => handleClick(region.id)}
          >
            {region.name}
          </Button>
        </li>
      ))}
    </ul>
  );
}
