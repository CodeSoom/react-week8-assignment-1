import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  fontSize: '1.5em',
  '& button': {
    color: '#111',
    border: '1px solid #CCC',
    padding: '.4em 1em',
    background: active ? '#eee' : 'transparent',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: '#555',
      fontWeight: 600,
    },
  },
}));

export default MenuItem;
