import styled from '@emotion/styled';

const Item = styled.li({
  fontSize: 20,
  fontWeight: 700,
  '& a': {
    background: 'linear-gradient(to right, white, white 50%, #5C1007 50%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textDecoration: 'none',
    backgroundSize: '200% 100%',
    backgroundPosition: '100%',
    color: '#d6c4ab',
    transition: 'background-position 275ms ease',
    '&:hover': {
      backgroundPosition: '0 100%',
    },
  },
  '& + &': {
    marginLeft: 70,
  },
});

export default Item;
