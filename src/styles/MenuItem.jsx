import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    marginBottom: '1em',
    padding: '.4em 1em',
    border: '1px solid #CCC',
    color: '#333333',
    background: active ? '#EEE' : 'transparent',
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
}));

export default MenuItem;
