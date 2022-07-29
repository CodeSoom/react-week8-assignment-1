import styled from '@emotion/styled';

const MenuStyle = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

export default function Menu({ children }) {
  return (
    <MenuStyle>{children}</MenuStyle>
  );
}
