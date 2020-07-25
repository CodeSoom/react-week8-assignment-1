import styled from '@emotion/styled';

const Header = styled.header({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#EEE',
  '& a': {
    color: '#555',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
    },
  },
});

export default Header;
