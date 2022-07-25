import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    padding: '1em',
    cursor: 'pointer',
    border: '0',
    background: active ? 'pink' : 'transparent',
    color: 'skyblue',
    textDecoration: 'none',

    '&:hover': {
      color: 'violet',
    },
  },
}));

export default MenuItem;
