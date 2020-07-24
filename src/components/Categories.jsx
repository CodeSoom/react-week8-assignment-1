import React from 'react';

import styled from '@emotion/styled';

import Layout from '../styles/Layout';
import List from '../styles/List';
import Item from '../styles/Item';

const Title = styled.h2({
  margin: 0,
  padding: '.4em 0',
  color: '#333',
});

export default function Categories({
  categories, selectedCategory, handleClick,
}) {
  const isSelected = (item) => (item.id === selectedCategory.id);

  return (
    <Layout>
      <Title>Category</Title>
      <List>
        {categories.map((category) => (
          <Item
            key={category.id}
            active={selectedCategory && isSelected(category)}
          >
            <button
              type="button"
              onClick={() => handleClick(category.id)}
            >
              {category.name}
              {selectedCategory ? (
                <>
                  {isSelected(category) ? '(V)' : null}
                </>
              ) : null}
            </button>
          </Item>
        ))}
      </List>
    </Layout>
  );
}
