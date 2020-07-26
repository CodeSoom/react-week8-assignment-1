import styled from '@emotion/styled';

const ResultItem = styled.li(() => ({
  width: '100%',
  marginBottom: '.1em',
  marginRight: '.1em',
  '& a': {
    width: '100%',
    background: '#424242',
    border: 0,
    color: '#ffffff',
    textDecoration: 'none',
    cursor: 'pointer',
    display: 'block',
    height: '100%',
    padding: '.97em .23em',
    textAlign: 'center',
    fontSize: '1em',
    '&:hover': {
      width: '100%',
      border: 0,
      background: '#FFD600',
      fontWeight: 'bold',
      color: '#424242',
    },
  },
}));


export default ResultItem;
