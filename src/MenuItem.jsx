import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '5px',
  padding: '10px',
  '& button': {
    background: active ? '#2ecc71' : '#EEE',
    color: active ? '#EEE' : 'black',
    outline: 'none',
    padding: '5px 10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
}));

export default MenuItem;
