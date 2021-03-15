import React from 'react';

const MenuItems = React.memo(({ menuItems }) => {
  if (!(menuItems || []).length) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }

  return (
    <ul>
      {menuItems.map(({ id, name }) => (
        <li key={id}>
          {name}
        </li>
      ))}
    </ul>
  );
});

export default MenuItems;
