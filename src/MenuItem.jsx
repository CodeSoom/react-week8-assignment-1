import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    padding: '.4em  1em',
    fontsize: '16sp',
    border: '1px solid #AAA',
    background: active ? '#EEE' : 'transparent',
    color: '#333',
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
      fontWeight: 'bold',
    },
  },
}));
export default MenuItem;
