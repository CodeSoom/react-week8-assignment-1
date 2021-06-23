import styled from '@emotion/styled';

const NoMenuItem = styled.p({
  fontSize: '.5em',
  margin: '0 auto',
  padding: '0',
  color: '#55462b',
  textAlign: 'center',
  lineHeight: '10em',
  height: '20em',
  borderBottom: '#e8e8c5 solid 1px',
});

const MenuItemList = styled.ul({
  margin: '0 auto',
  padding: '1em 2em',
  borderBottom: '#e8e8c5 solid 1px',
});

const Menu = styled.li({
  fontsize: '.4em',
  color: '#55462b',
  display: 'inline-block',
  width: '20%',
  height: '4em',
  textAlign: 'center',
  margin: '1em 2.5em',
});

export default function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <NoMenuItem>메뉴가 없어요!</NoMenuItem>
    );
  }

  return (
    <MenuItemList>
      {menuItems.map((menuItem) => (
        <Menu key={menuItem.id}>
          {menuItem.name}
        </Menu>
      ))}
    </MenuItemList>
  );
}
