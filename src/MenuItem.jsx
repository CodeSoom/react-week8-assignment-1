import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  marginRight: '5px',
  padding: '10px',
  '& button': {
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    background: active ? '#2ecc71' : '#EEE',
    color: active ? '#EEE' : 'black',
    outline: 'none',
    cursor: 'pointer',
  },
}));

export default MenuItem;
