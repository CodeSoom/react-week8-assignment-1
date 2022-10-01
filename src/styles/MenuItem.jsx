import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  '&:not(:last-child)': {
    marginRight: '1em',
  },
  '& button': {
    padding: '.4em 1em',
    border: '1px solid #CCC',
    backgroundColor: active ? '#EEE' : 'transparent',
    color: '#333',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      color: '#000',
      fontWeight: 'bold',
    },
  },
}));

export default MenuItem;
