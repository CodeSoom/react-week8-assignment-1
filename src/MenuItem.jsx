import styled from '@emotion/styled';

const Item = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    padding: '.4em 1em',
    border: '1px solid #CCC',
    color: '#333',
    background: active ? '#EEE' : 'transparent',
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
      fontWeight: 'bold',
    },
  },
}));

export default Item;
