import styled from '@emotion/styled';

import React from 'react';

const Nothing = styled.p({
  fontSize: '18px',
  fontWeight: '500',
  marginBottom: '12px',
  marginTop: '12px',
});

const List = styled.ul({
  fontSize: '18px',
  fontWeight: '500',
  marginTop: '12px',
  display: 'flex',
  '& li': {
    marginRight: '12px',
  },
});

function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <Nothing>메뉴가 없어요!</Nothing>
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
