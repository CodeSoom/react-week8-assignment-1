import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    padding: '.4em 1em',
    color: '#333',
    textDecoration: 'none',
    border: '1px solid #CCC',
    background: active ? '#eee' : 'transparent',
    cursor: 'pointer',
    '&:hover ': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
}));

export default MenuItem;
