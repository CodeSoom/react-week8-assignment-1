import styled from '@emotion/styled';

const MenuList = styled.ul({
  display: 'flex',
  listStyle: 'none',

  '& li': {
    '&:not(:last-child)': {
      marginRight: '10px',
    },
  },
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
        <li key={menuItem.id}>
          {menuItem.name}
        </li>
      ))}
    </MenuList>
  );
}
