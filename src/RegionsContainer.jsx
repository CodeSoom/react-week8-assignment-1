import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import {
  selectRegion,
  loadRestaurants,
} from './slice';

import { get } from './utils';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <Ul>
      {regions.map((region) => (
        <li key={region.id}>
          <Button
            type="button"
            onClick={() => handleClick(region.id)}
          >
            {region.name}
            {selectedRegion ? (
              <>
                {region.id === selectedRegion.id ? '(V)' : null}
              </>
            ) : null}
          </Button>
        </li>
      ))}
    </Ul>
  );
}

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  padding: 0.5em 1.5em;
  border: 1px solid #000;
  border-radius: 5px;

  &:hover {
    color: #FFF;
    background-color: #000;
  }
`;
