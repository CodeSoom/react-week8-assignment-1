import Menu from './Menu';
import MenuItem from './MenuItem';

export default function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }

  return (
    <Menu>
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.id}>
          {menuItem.name}
        </MenuItem>
      ))}
    </Menu>
  );
}
