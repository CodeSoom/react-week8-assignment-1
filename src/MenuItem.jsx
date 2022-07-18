import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    padding: '.4em 1em',
    border: '1px solid #CCC',
    background: active ? '#EEE' : 'transparent',
    cursor: 'pointer',
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
}));

export default MenuItem;
