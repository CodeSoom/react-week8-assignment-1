import styled from '@emotion/styled';

import green from '../../fixtures/color';

export const PageTop = styled.div({
  padding: '3rem',
  background: '#f4f7f8',
  h2: {
    fontSize: '3rem',
    marginBottom: '0.2em',
    color: `${green}`,
    textAlign: 'center',
  },
});

export const PageBody = styled.div({
  width: '80%',
  margin: '0 auto',
  padding: '3rem',
});
