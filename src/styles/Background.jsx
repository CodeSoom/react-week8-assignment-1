import styled from '@emotion/styled';

import BackgroundImage from '../assets/images';

const Background = styled.div({
  paddingTop: '80px',
  width: '100%',
  top: 0,
  left: 0,
  textAlign: 'center',
  background: `url(${BackgroundImage}) no-repeat center`,
  backgroundSize: '100% 100%',
  flexDirection: 'column',
  display: 'flex',
  minHeight: '100vh',
});

export default Background;
