import React from 'react';

import styled from '@emotion/styled';

import { royalBlue, white } from '@/styles/colors';

const Button = styled.button({
  opacity: 0.9,
  borderColor: 'transparent',
  borderRadius: '.375rem',
  padding: '.5rem 1rem',
  backgroundColor: royalBlue,
  cursor: 'pointer',
  fontWeight: 500,
  color: white,
  '&:hover': {
    opacity: 1.0,
  },
});

export default React.memo(Button);
