import styled from '@emotion/styled';

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

const MenuList = styled.div({
  width: '100%',
  backgroundColor: '#B2EBF4',
});

const MenuItem = styled.div({
  padding: '10px',
  color: '#FFFFFF',
});
