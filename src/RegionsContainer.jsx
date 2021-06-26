import { useDispatch, useSelector } from 'react-redux';

import ListBox from './style/ListBox';
import List from './style/List';
import Item from './style/Item';

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
    <ListBox>
      <h4>지역 선택</h4>
      <List>
        {regions.map(({ id, name }) => (
          <Item
            key={id}
            active={selectedRegion?.id === id}
          >
            <button
              type="button"
              onClick={() => handleClick(id)}
            >
              {name}
              {selectedRegion ? (
                <>
                  {id === selectedRegion.id ? '(V)' : null}
                </>
              ) : null}
            </button>
          </Item>
        ))}
      </List>
    </ListBox>
  );
}
