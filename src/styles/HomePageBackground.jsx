import styled from '@emotion/styled';

const HomePageBackground = styled.div({
  position: 'relative',
  height: '50vh',
  background: 'URL("../assets/foodImage.png") center/cover',
  zIndex: '1',
  '&:after': {
    content: '""',
    position: 'absolute',
    display: 'block',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
    zIndex: '-1',
  },
});

export default HomePageBackground;
