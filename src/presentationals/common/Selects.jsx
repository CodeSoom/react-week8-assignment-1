import styled from '@emotion/styled';

import React from 'react';

import { Container, Title } from '../../styles/Common';

const SelectButtons = styled.div(({ activeColor }) => ({
  display: 'flex',
  flexDirection: 'row',
  '& button:hover': {
    backgroundColor: activeColor,
    color: '#fff',
  },
  '& button:focus': {
    outlineColor: '#fff',
    borderRadius: '15%',
    color: '#fff',
  },
}));

const SelectButton = styled.button(({ active, activeColor, defaultColor }) => ({
  margin: '0.5em',
  width: '10%',
  height: '10%',
  padding: '1em 0',
  fontSize: '18px',
  letterSpacing: '2px',
  backgroundColor: active ? activeColor : defaultColor,
  color: active ? defaultColor : activeColor,
  border: `1.5px solid ${activeColor}`,
  borderRadius: '10%',
}));

export default function Selects({
  selectTitle, selectMenus, handleClick, selectedItem, defaultColor, activeColor,
}) {
  return (
    <Container>
      <Title>{selectTitle}</Title>
      <SelectButtons
        activeColor={activeColor}
        defaultColor={defaultColor}
      >
        {selectMenus.map((selectMenu) => (
          <SelectButton
            key={selectMenu.id}
            type="button"
            onClick={() => handleClick(selectMenu.id)}
            active={selectedItem && selectMenu.id === selectedItem.id}
            defaultColor={defaultColor}
            activeColor={activeColor}
          >
            {selectMenu.name}
          </SelectButton>
        ))}
      </SelectButtons>
    </Container>

  );
}
