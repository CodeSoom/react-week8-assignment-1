import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    padding: '.4em 1em',
    border: 'none',
    borderRadius: '.5em',
    background: 'rgba(51, 51, 51, 0.05)',
    fontWeight: 'bold',
    fontSize: '1.5em',
    color: active ? '#333' : '#6e6d7a',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold',
      color: '#333',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  '& a': {
    textDecoration: 'none',
    color: '#333',
  },
}));

export default MenuItem;
