import React from 'react';

import styled from '@emotion/styled';

const List = styled.ul({
  marginTop: '3em',
  justifyContent: 'center',
});

function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }

  return (
    <List>
      {menuItems.map((menuItem) => (
        <li key={menuItem.id}>
          {menuItem.name}
        </li>
      ))}
    </List>
  );
}

export default React.memo(MenuItems);
