import React from 'react';

import styled from '@emotion/styled';

const List = styled.ul({
  display: 'flex',
  listStyle: 'none',
  paddingLeft: '0',
  '& li': {
    color: 'white',
    backgroundColor: 'teal',
    border: '2px solid black',
    borderRadius: '5px',
    padding: '3px 5px',
    marginRight: '10px',
  },
});

const NoMenu = styled.p({
  color: 'red',
  fontSize: '20px',
});

function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <NoMenu>메뉴가 없어요!</NoMenu>
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
