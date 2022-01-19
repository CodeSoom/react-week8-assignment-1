import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '.5em',
  '& button': {
    border: 0,
    background: active ? '#EEE' : 'transparent',
    fontWeight: active && 'bold',
    fontSize: '1em',
    color: '#333',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
}));

export default MenuItem;
