import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    padding: '0.4em 1em',
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
