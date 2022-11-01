import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  '& button': {
    minWidth: '90px',
    padding: '0.4em 1em',
    margin: '0.4em 0',
    border: '1px solid #ccc',
    background: active ? '#eee' : 'transparent',
    color: '#333',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      border: '1px soild #000',
      color: '#000',
      fontWeight: 'bold',
    },
  },
}));

export default MenuItem;
