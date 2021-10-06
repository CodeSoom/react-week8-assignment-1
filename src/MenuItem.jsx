import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    padding: '.4em .5em',
    border: '1px solid gray',
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
