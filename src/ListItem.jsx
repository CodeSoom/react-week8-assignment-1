
import styled from '@emotion/styled';

const ListItem = styled.li(({ active }) => ({
  width: '23%',
  'button, a': {
    fontSize: '1rem',

    display: 'block',

    boxSizing: 'border-box',
    width: '100%',
    padding: '0.5em 1.1em',
    border: '1px solid #dcdcdc',
    borderRadius: '1em',

    background: active && '#8989ba',
    color: active && '#fff',

    textAlign: 'center',

    transition: '0.2s linear',

    cursor: 'pointer',

    '&:hover': {
      color: '#fff',
      background: '#8989ba',
    },
  },
}));

export default ListItem;
