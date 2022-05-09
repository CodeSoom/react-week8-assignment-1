import Paragraph from './Paragraph';
import MenuList from './MenuList';
import MenuItem from './MenuItem';

export default function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <Paragraph>메뉴가 없어요!</Paragraph>
    );
  }

  return (
    <MenuList>
      {menuItems.map((menuItem) => (
        <MenuItem key={menuItem.id}>
          {menuItem.name}
        </MenuItem>
      ))}
    </MenuList>
  );
}
