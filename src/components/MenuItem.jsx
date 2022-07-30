import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1rem',
  '& button': {
    border: '1px solid #CCCCCC',
    padding: '.4rem 1rem',
    backgroundColor: active ? '#D4F4FA' : 'transparent',
    cursor: 'pointer',
    fontWeight: active ? 'bold' : 'normal',
    color: '#333333',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000000',
    },
  },
}));

export default MenuItem;
