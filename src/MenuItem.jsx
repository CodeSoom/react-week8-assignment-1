import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    padding: '.4em 1em',
    border: 'none',
    background: 'transparent',
    fontSize: '3vh',
    color: active ? 'rgb(150, 150, 150)' : 'rgb(212, 212, 212)',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold',
      color: 'rgb(150, 150, 150)',
    },
    '&:focus': {
      outline: 'none',
    },
  },
}));

export default MenuItem;
