import styled from '@emotion/styled';

import colors from './colors';

const Button = styled.button({
  width: '25%',
  margin: '3em auto',
  padding: '.4em',
  outline: `${colors.titlehover} auto .5px`,
  color: `${colors.titlehover}`,
  backgroundColor: `${colors.basic}`,
  fontSize: '.5em',
  '&:hover': {
    outline: `${colors.back} auto 1px`,
    color: `${colors.title}`,
    backgroundColor: `${colors.back}`,
    fontWeight: '600',
  },
});

export default Button;
