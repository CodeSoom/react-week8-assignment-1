import styled from '@emotion/styled';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectedCategorySelector,
  categoriesSelector,
  selectCategory,
  loadCategories,
} from './categoriesSlice';

import { loadRestaurants } from '../restaurants/restaurantsSlice';

const Container = styled.div({
  marginBottom: '1rem',
});

const Title = styled.h3({
  margin: '0 0 1rem 0',
  fontSize: '2rem',
});

const List = styled.ul({
  display: 'flex',
});

const Item = styled.li({
  marginRight: '1.5rem',

  '&:last-child': {
    marginRight: 0,
  },
});

const MenuButton = styled.button(({ selected }) => ({
  padding: '1rem 1.5rem',
  border: '2px solid #495057',
  borderRadius: '0.5rem',
  fontSize: '2rem',
  fontWeight: 'bold',
  color: selected ? '#ffffff' : '#495057',
  backgroundColor: selected ? '#495057' : '#ffffff',
}));

const Message = styled.p({
  lineHeight: 1.5,
  fontSize: '2rem',
  fontWeight: 'bold',
  textAlign: 'center',
});

export default function CategoriesContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  const categories = useSelector(categoriesSelector);
  const selectedCategory = useSelector(selectedCategorySelector);

  const handleClick = (categoryId) => {
    dispatch(selectCategory({ categoryId }));
    dispatch(loadRestaurants());
  };

  const isSelected = (categoryId) => {
    if (!selectedCategory) {
      return false;
    }

    return selectedCategory.id === categoryId;
  };

  if (!categories?.length) {
    return (
      <Message>
        카테고리 목록을 조회하지 못했습니다.
      </Message>
    );
  }

  return (
    <Container>
      <Title>카테고리 목록</Title>
      <List>
        {categories.map((category) => (
          <Item key={category.id}>
            <MenuButton
              selected={isSelected(category.id)}
              type="button"
              onClick={() => handleClick(category.id)}
            >
              {category.name}
              {selectedCategory ? (
                <>
                  {isSelected(category.id) ? '(V)' : null}
                </>
              ) : null}
            </MenuButton>
          </Item>
        ))}
      </List>
    </Container>
  );
}
