import styled from '@emotion/styled';

const MenuItem = styled.li(({ act }) => ({
  padding: '0 1em',
  '& button': {
    border: 0,
    color: act ? '#a2798f' : '#333',
    fontWeight: act ? 'bolder' : 'normal',
    background: 'transparent',
    textDecoration: 'none',
    '&:hover': {
      color: '#d7c6cf',
    },
  },
  '& a': {
    fontSize: '13px',
    color: '#dfdfde',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bolder',
      color: '#8caba8',
    },
  },
}));

export default MenuItem;
