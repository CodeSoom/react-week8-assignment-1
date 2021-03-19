import styled from '@emotion/styled';

import { colors } from '../designSystem';

const SelectButton = styled.button(({ active }) => ({
  fontSize: '1em',
  margin: '1em 0',
  padding: '.6em 2em',
  border: '1px solid',
  borderColor: active ? 'transparent' : colors.highlight,
  borderRadius: '15px',
  background: active ? colors.highlight : 'transparent',
  color: active ? colors.white : colors.black,
  textDecoration: 'none',
  cursor: 'pointer',
}));


export default SelectButton;
