import styled from '@emotion/styled';

const HeaderTab = styled.span({
  '& a': {
    padding: '.1em .3em',
    margin: '.3em .5em',
    fontSize: '1.4em',
    color: '#000',
    textDecoration: 'none',
    '&:hover': {
      color: '#2647DB',
      fontStyle: 'underline',
      borderBottom: '3px solid #2647DB',
    },
  },
});

export default HeaderTab;
