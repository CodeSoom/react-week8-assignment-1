import styled from "@emotion/styled";

const Item = styled.li({
  marginRight: '1em',

  '& a': {
    color: '#333',
    textDecoration: 'none',

    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
});

export default Item;
