import styled from '@emotion/styled';

const MenuItem = styled.li(({ active }) => ({
  width: '180px',
  height: '65px',
  color: active ? '#ffffff' : '#000000',
  border: active ? '#1px solid transparent' : '1px solid #000',
  backgroundColor: active ? '#870009' : 'transparent',
  fontWeight: active ? '600' : '400',
  textAlign: 'center',
  lineHeight: '65px',

  '& button': {
    width: '180px',
    height: '65px',
    textAlign: 'center',
  },
}));

export default MenuItem;
