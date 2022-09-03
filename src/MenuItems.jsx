import styled from '@emotion/styled';

const MenuList = styled.ul({
  listStyle: 'inside disc',
  marginBottom: '20px',
});

const MenuItem = styled.li({
  marginBottom: '5px',
});

export default function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <p>메뉴가 없어요!</p>
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
