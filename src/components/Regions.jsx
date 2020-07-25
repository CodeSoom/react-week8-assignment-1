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

export default function Regions({
  regions, selectedRegion, handleClick,
}) {
  const isSelected = (item) => (item.id === selectedRegion.id);

  return (
    <Layout>
      <Title>Region</Title>
      <List>
        {regions.map((region) => (
          <Item
            key={region.id}
            active={selectedRegion && isSelected(region)}
          >
            <button
              type="button"
              onClick={() => handleClick(region.id)}
            >
              {region.name}
              {selectedRegion && isSelected(region) && '(V)'}
            </button>
          </Item>
        ))}
      </List>
    </Layout>
  );
}
