import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

import {
  selectCategory,
  loadRestaurants,
} from '../../slice/restaurantSlice';

import { get } from '../../utils';

const List = styled.ul({
  width: '100%',
  margin: '14px auto',
  display: 'flex',
  flexWrap: 'wrap',
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

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  const categories = useSelector(get({ sliceName: 'restaurantSlice', key: 'categories' }));
  const selectedCategory = useSelector(get({ sliceName: 'restaurantSlice', key: 'selectedCategory' }));

  function handleClick(categoryId) {
    dispatch(selectCategory(categoryId));
    dispatch(loadRestaurants());
  }

  return (
    <List>
      <Text>
        <FontAwesomeIcon icon={faUtensils} />
        {' '}
        종류
      </Text>
      {categories.map((category) => (
        <Item key={category.id}>
          <Button
            type="button"
            onClick={() => handleClick(category.id)}
            active={selectedCategory && category.id === selectedCategory.id}
          >
            {category.name}
            {selectedCategory ? (
              <>
                {category.id === selectedCategory.id ? '(V)' : null}
              </>
            ) : null}
          </Button>
        </Item>
      ))}
    </List>
  );
}
