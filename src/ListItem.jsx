
import styled from '@emotion/styled';

const ListItem = styled.li(({ active }) => ({
  width: '23%',
  'button, a': {
    display: 'block',
    width: '100%',
    padding: '0.5rem 1.1em',
    fontSize: '1rem',
    textAlign: 'center',
    color: active && '#fff',
    border: '1px solid #dcdcdc',
    boxSizing: 'border-box',
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
