import styled from '@emotion/styled';

import colors from './colors';

const Button = styled.button({
  width: '25%',
  margin: '3em auto',
  padding: '.4em',
  outline: `${colors.button_gray010} auto .5px`,
  color: `${colors.button_gray020}`,
  backgroundColor: `${colors.base_white}`,
  fontSize: '.6em',
  '&:hover': {
    outline: `${colors.button_green} auto 1px`,
    color: `${colors.text_primary}`,
    backgroundColor: `${colors.background_green}`,
    fontWeight: '600',
  },
});

export default Button;
