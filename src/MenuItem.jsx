import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  fontSize: '1.1em',
  '& button': {
    padding: '.4em 1em',
    border: '1px solid #ccc',
    background: active ? '#eee' : 'transparent',
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
