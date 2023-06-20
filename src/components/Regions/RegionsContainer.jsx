import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

import {
  selectRegion,
  loadRestaurants,
} from '../../slice/restaurantSlice';

import { get } from '../../utils';

const List = styled.ul({
  width: '100%',
  margin: '14px auto',
  display: 'flex',
  flexWrap: 'wrap',
  borderBottom: '1px solid #cccccc',
  paddingBottom: '1.2rem',
  marginBottom: '2rem',
});

const Text = styled.p({
  fontFamily: 'Noto Sans KR',
  fontSize: '1.4rem',
  fontWeight: 'bold',
  textAlign: 'center',
  lineHeight: '1.8',
  '&:after': {
    content: '""',
    display: 'block',
    backgroundColor: '#A30F0F',
    width: '67px',
    height: '2px',
  },
});

const Item = styled.li({
  margin: '0.5rem 1rem',
  textAlign: 'center',
});

const Button = styled.button(({ active }) => ({
  width: '150px',
  padding: '12px 0',
  backgroundColor: active ? '#A30F0F' : 'transparent',
  color: active ? '#ffffff' : '#000000',
  fontSize: '18px',
  fontFamily: 'Noto Sans KR',
  borderRadius: '5px',
  border: '1px solid #808080',
}));

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get({ sliceName: 'restaurantSlice', key: 'regions' }));
  const selectedRegion = useSelector(get({ sliceName: 'restaurantSlice', key: 'selectedRegion' }));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <List>
      <Text>
        <FontAwesomeIcon icon={faMapLocationDot} />
        {' '}
        지역
      </Text>
      {regions.map((region) => (
        <Item key={region.id}>
          <Button
            type="button"
            onClick={() => handleClick(region.id)}
            active={selectedRegion && region.id === selectedRegion.id}
          >
            {region.name}
            {selectedRegion ? (
              <>
                {region.id === selectedRegion.id ? '(V)' : null}
              </>
            ) : null}
          </Button>
        </Item>
      ))}
    </List>
  );
}
