import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    padding: '.4em 1em',
    border: '1px solid  #CCC',
    borderRadius: '4px',
    background: active ? '#6640f2' : 'transparent',
    color: active ? '#FFF' : '#333',
    textDecoration: 'none',
    cursor: 'pointer',
    outline: 0,
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
}));

export default MenuItem;
