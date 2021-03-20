import React from 'react';

import styled from '@emotion/styled';

function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }

  const Ul = styled.ul({
    listStyle: 'none',
  });

  return (
    <Ul>
      {menuItems.map((menuItem) => (
        <li key={menuItem.id}>
          {menuItem.name}
        </li>
      ))}
    </Ul>
  );
}

export default React.memo(MenuItems);
