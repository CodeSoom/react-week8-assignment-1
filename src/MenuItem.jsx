import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  '& button': {
    width: '60px',
    padding: '.4em 0',
    border: '1px solid #CCC',
    background: active ? '#EEE' : 'transparent',
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
