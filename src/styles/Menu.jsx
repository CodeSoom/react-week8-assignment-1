import styled from '@emotion/styled';

export const MenuList = styled.ul({
  display: 'flex',
  listStyle: 'none',
  padding: 0,
});

export const MenuItem = styled.li(({ select }) => ({
  fontSize: '1em',
  '& button': {
    marginRight: '1em',
    background: 'transparent',
    padding: '.5em 1em',
    border: select ? '2px solid red' : '1px solid #CCC',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    '&:focus': {
      backgroundColor: '#f7f1e3',
    },
  },
}));
