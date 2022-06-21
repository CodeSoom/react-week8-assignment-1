import styled from '@emotion/styled';

const MenuItem = styled.li({
  marginRight: '1rem',
  '& button': {
    border: 0,
    background: 'transparent',
    textDecoration: 'none',
    color: '#333',
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
});

export default MenuItem;
