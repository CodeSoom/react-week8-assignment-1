import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  margin: '0 .5em',
  '& button': {
    width: '5.5em',
    padding: '.5em',
    border: 0,
    color: '#55462b',
    outline: '#d8ddbe auto 1px',
    backgroundColor: active ? '#efefe2' : 'transparent',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: '#757a76',
      fontWeight: '600',
      outline: '#d8ddbe auto 1px',
    },
  },
}));

export default MenuItem;
