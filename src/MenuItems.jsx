import React from 'react';

import styled from '@emotion/styled';

const Menus = styled.ul({
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-evenly',
});

function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }

  return (
    <Menus>
      {menuItems.map((menuItem) => (
        <li key={menuItem.id}>
          {menuItem.name}
        </li>
      ))}
    </Menus>
  );
}

export default React.memo(MenuItems);
