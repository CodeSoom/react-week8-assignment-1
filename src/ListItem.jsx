
import styled from '@emotion/styled';

const ListItem = styled.li(({ active }) => ({
  '& + &': {
    marginLeft: '0.5rem',
  },
  'button, a': {
    display: 'block',
    padding: '0.5rem 1.1em',
    fontSize: '1rem',
    color: active && '#fff',
    border: '1px solid #dcdcdc',
    borderRadius: '1em',
    background: active && '#8989ba',
    cursor: 'pointer',
    transition: '0.2s linear',
    '&:hover': {
      color: '#fff',
      background: '#8989ba',
    },
  },
}));

export default ListItem;
