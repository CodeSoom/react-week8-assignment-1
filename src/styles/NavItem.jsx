import styled from '@emotion/styled';

const NavItem = styled.li({
  cursor: 'pointer',
  border: '1px solid transparent',
  borderRadius: '4px',
  padding: '.4em',

  '& a': {
    color: '#FFF',
    textDecoration: 'none',
  },
  ': hover': {
    border: '1px solid #FFF',
    backgroundColor: '#6640f2',
  },
});

export default NavItem;
