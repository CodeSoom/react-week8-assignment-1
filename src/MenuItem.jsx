import styled from '@emotion/styled';

const MenuItem = styled.li({
  marginRight: '1em',
  '& button': {
    cursor: 'pointer',
    border: '0',
    background: 'transparent',
    color: 'skyblue',
    textDecoration: 'none',

    '&:hover': {
      color: 'violet',
    },
  },
});

export default MenuItem;
