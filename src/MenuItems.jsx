import styled from '@emotion/styled';

import React from 'react';

const Nothing = styled.p({
  fontSize: '18px',
  fontWeight: '500',
  marginBottom: '12px',
});

function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <Nothing>메뉴가 없어요!</Nothing>
    );
  }

  return (
    <ul>
      {menuItems.map((menuItem) => (
        <li key={menuItem.id}>
          {menuItem.name}
        </li>
      ))}
    </ul>
  );
}

export default React.memo(MenuItems);
