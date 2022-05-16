import styled from '@emotion/styled';

const MenuItem = styled.li({
  marginRight: '1em',
  '& a': {
    textDecoration: 'none',
    color: '#555',
    padding: '0.5em 0.1em',
    '&:hover': {
      borderBottom: '1.5px solid #777',
    },
  },
});

export default MenuItem;
