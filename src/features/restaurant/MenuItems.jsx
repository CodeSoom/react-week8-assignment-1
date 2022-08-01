import styled from '@emotion/styled';

const Message = styled.p({
  lineHeight: 1.5,
  fontSize: '1.8rem',
  fontWeight: 'bold',
  textAlign: 'center',
});

const List = styled.ul({
  margin: 0,
  padding: '1rem',
});

const Item = styled.li({
  margin: '0 1rem 0 0',
  padding: '0.5rem 0',
  fontSize: '1.75rem',
});

export default function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <Message>메뉴가 없어요!</Message>
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
