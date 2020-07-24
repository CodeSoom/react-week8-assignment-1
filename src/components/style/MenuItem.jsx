import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    padding: '.5em 1em',
    color: '#000',
    backgroundColor: active ? '#CCC' : 'transparent',
    '&:hover': {
      color: '#000',
      fontWeight: 'bold',
      cursor: 'pointer',
      backgroundColor: '#CCC',
    },
  },
  '@media (max-width: 1000px)': {
    '& button': {
      padding: '.5em 1em',
      color: active ? '#000' : '#FFF',
      backgroundColor: active ? 'transparent' : '#555',
      '&:hover': {
        color: '#000',
        fontWeight: 'bold',
        cursor: 'pointer',
        backgroundColor: '#CCC',
      },
    },
  },
}));

export default MenuItem;
