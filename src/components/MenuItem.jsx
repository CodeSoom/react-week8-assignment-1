import styled from '@emotion/styled';

const MenuItem = styled.li(({ isSelected }) => ({
  marginRight: '1em',
  '& button': {
    fontSize: '1.5em',
    border: 0,
    color: isSelected ? 'red' : 'black',
    background: 'transparent',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
    },
  },
  '& a': {
    fontSize: '1.5em',
    color: 'black',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
    },
  },
}));

export default MenuItem;
