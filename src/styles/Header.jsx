import styled from '@emotion/styled';

const Header = styled.header({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#424242',
  '& h1': {
    fontSize: '2em',
    margin: 0,
    padding: '1em 1.5em',
    textAlign: 'center',
  },
  '& a': {
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      color: '#FFD600',
    },
  },
});

export default Header;
