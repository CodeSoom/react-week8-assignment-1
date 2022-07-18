import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1rem',
  '& button': {
    padding: '.4em 1em',
    border: '1px solid #CCC',
    background: active ? '#EEE' : 'transparent',
    textDecoration: 'none',
    color: '#333',
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
}));

export default MenuItem;
