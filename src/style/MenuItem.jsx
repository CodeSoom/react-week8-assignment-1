import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginBottom: '16px',
  '& button': {
    minWidth: '90px',
    padding: '8px 16px',
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
