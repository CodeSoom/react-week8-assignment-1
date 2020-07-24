import styled from '@emotion/styled';

const Item = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    fontSize: '16px',
    padding: '.6em 2em',
    border: '2px solid #CCC',
    borderColor: active ? '#CCC' : '#EEE',
    background: active ? '#DDEAFF' : 'transparent',
    textDecoration: 'none',
    cursor: 'pointer',
    borderRadius: '10px',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
}));

export default Item;
