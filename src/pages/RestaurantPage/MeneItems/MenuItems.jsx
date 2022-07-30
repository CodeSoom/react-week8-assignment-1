import styled from '@emotion/styled';

const List = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

const Item = styled.li({
  marginRight: '1rem',
  '& a': {
    textDecoration: 'none',
    color: '#333333',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000000',
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
    <List>
      {menuItems.map((menuItem) => (
        <Item key={menuItem.id}>
          {menuItem.name}
        </Item>
      ))}
    </List>
  );
}
