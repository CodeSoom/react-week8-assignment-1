import styled from '@emotion/styled';

const Item = styled.li({
  fontSize: '1.1em',
  marginRight: '1em',
  padding: '1em',
  '& a': {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    '&:hover': {
      color: '#FFD600',
    },
  },
});


export default Item;
