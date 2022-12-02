import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import {
  selectRegion,
  loadRestaurants,
} from '../../slice';

import { get } from '../../utils';

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

const Item = styled.li`
  width: 180px;
  height: 65px;
  border: 1px solid #000;
  text-align: center;
  line-height: 65px;

  & button {
    width: 180px;
    height: 65px;
    text-align: center;
  }
`;

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <>
      <p>지역</p>
      <List>
        {regions.map((region) => (
          <Item key={region.id}>
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
          </Item>
        ))}
      </List>
    </>
  );
}
