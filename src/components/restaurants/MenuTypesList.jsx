import React from 'react';

import Menu from './Menu';
import MenuList from '../../styles/MenuList';

const MenuTypesList = ({ types, onClickType, selectedType }) => {
  if (types.length === 0) {
    return null;
  }

  return (
    <MenuList>
      {types.map(({ id, name }) => (
        <Menu
          key={id}
          name={name}
          check={selectedType && id === selectedType.id}
          onClick={() => onClickType(id)}
        />
      ))}
    </MenuList>
  );
};

export default MenuTypesList;
