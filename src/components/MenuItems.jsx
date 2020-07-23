import React from 'react';

const MenuItems = React.memo(({ menuItems }) => {
  if (!(menuItems || []).length) {
    return (
      <p>메뉴가 없어요!</p>
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
});

export default MenuItems;
