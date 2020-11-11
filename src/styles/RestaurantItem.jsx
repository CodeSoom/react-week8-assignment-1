import styled from '@emotion/styled';

const RestuarantItem = styled.li({
  marginRight: '1em',
  width: '250px',
  height: '120px',
  border: '1px solid  #CCC',
  borderRadius: '4px',
  textAlign: 'center',
  marginBottom: '16px',
  padding: '8px 0',
  '& a': {
    display: 'block',
    width: '250px',
    height: '120px',
    color: '#333',
    fontSize: '18px',
    textDecoration: 'none',
    lineHeight: '117px',
    '&:hover': {
      fontWeight: 'bold',
      color: '#FFF',
      background: '#6640f2',
    },
  },
});

export default RestuarantItem;
