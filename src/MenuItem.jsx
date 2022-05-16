import styled from '@emotion/styled';

const MenuItem = styled.li({
  marginRight: '1em',

  '& button': {
    border: 0,
    background: 'transparent',
    cursor: 'pointer',
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
});

export default MenuItem;
