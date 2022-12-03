import styled from '@emotion/styled';

const Menu = styled.ul`
  display: flex;
  margin-left: 3rem;
  & li {
    position: relative;
    margin-right: 2rem;

    &::after {
    content: '';
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    border-right: 1px solid #303030;
    position: absolute;
    top: 0;
    right: -10px;
    }

    &:last-child::after {
      display: none;
    }
  }

  
`;

export default function MenuItems({ menuItems }) {
  if (!(menuItems || []).length) {
    return (
      <p>메뉴가 없어요!</p>
    );
  }

  return (
    <Menu>
      {menuItems.map((menuItem) => (
        <li key={menuItem.id}>
          {menuItem.name}
        </li>
      ))}
    </Menu>
  );
}
