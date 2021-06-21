import styled from '@emotion/styled';

const MenuItem = styled.li({
  marginRight: '1em',
  '& a': {
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
    },
  },
});

export default MenuItem;
