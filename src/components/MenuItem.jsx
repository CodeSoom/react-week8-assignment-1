import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1rem',
  '& button': {
    padding: '.4rem 1rem',
    border: '1px solid #CCCCCC',
    backgroundColor: active ? '#D4F4FA' : 'transparent',
    color: '#333333',
    cursor: 'pointer',
    fontWeight: active ? 'bold' : 'normal',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000000',
    },
  },
}));

export default MenuItem;
