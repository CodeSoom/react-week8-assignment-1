import styled from '@emotion/styled';

const MenuItem = styled.li({
  width: '100%',
  padding: '30px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1 1',
  borderBottom: '1px #364f6b solid',
  '&:first-of-type': {
    borderTop: '1px #364f6b solid',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#f5f5f5',
  },
  '& a': {
    fontSize: '1.5em',
    color: '#364f6b',
    '&:link': {
      textDecoration: 'none',
    },
    '&:hover': {
      fontWeight: 'bold',
      color: '#3fc1c9',
      cursor: 'pointer',
    },
  },
});

export default MenuItem;
