import styled from '@emotion/styled';

const Header = styled.header({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '20%',
  backgroundColor: '#f1cdd7',
  '& h1': {
    fontSize: '4em',
  },
  '& a': {
    color: '#865c6c',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
    },
  },
});

export default Header;
