import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  '& a': {
    padding: '.4em 1em',
    background: active ? '#B689C0' : 'transparent',
    color: '#6A67CE',
    textDecoration: 'none',
    fontSize: '16px',
    '&:hover': {
      cursor: 'pointer',
      fontWeight: 'bold',
      color: '#B689C0',
    },
  },
  '& button': {
    padding: '.4em 1em',
    border: '1px solid #CCC',
    background: active ? '#B689C0' : 'transparent',
    color: '#6A67CE',
    textDecoration: 'none',
    fontSize: '16px',
    '&:hover': {
      cursor: 'pointer',
      fontWeight: 'bold',
      color: '#B689C0',
    },
  },
}));

export default MenuItem;
