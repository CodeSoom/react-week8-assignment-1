import styled from '@emotion/styled';

import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectRegion,
  loadRestaurants,
} from '../common/slice';

import { get } from '../common/utils';

import Selects from '../presentationals/common/Selects';

export default function RegionsContainer() {
  const dispatch = useDispatch();

  const regions = useSelector(get('regions'));
  const selectedRegion = useSelector(get('selectedRegion'));

  function handleClick(regionId) {
    dispatch(selectRegion(regionId));
    dispatch(loadRestaurants());
  }

  return (
    <Selects
      selectTitle="Region"
      selectMenus={regions}
      handleClick={handleClick}
      selectedItem={selectedRegion}
      defaultColor="#fff"
      activeColor="#8d98f2"
    />
  );
}
