import styled from '@emotion/styled';

const MenuItemStyle = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    marginBottom: '1em',
    padding: '.4em 1em',
    border: '1px solid #CCCCCC',
    color: '#333333',
    background: active ? '#EEEEEE' : 'transparent',
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000000',
    },
  },
}));

export default function MenuItem({ children, active }) {
  return (
    <MenuItemStyle active={active}>{children}</MenuItemStyle>
  );
}
