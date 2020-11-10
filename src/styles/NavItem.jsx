import styled from '@emotion/styled';

const MenuItem = styled.li({
  '& a': {
    color: '#FFF',
    textDecoration: 'none',
  },
  '&: hover': {
    color: '#BBB',
    fontWeight: 'bold',
  },
});

export default MenuItem;
