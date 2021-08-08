import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '4em',
  '& button': {
    padding: '.4em 1em',
    border: '1px solid #CCC',
    background: active ? '#EEE' : 'transparent',
    color: '#8B4513',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold',
      color: '#2E8B57',
    },
  },
}));

export default MenuItem;
