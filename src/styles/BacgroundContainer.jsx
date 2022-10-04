import styled from '@emotion/styled';

const BacgroundContainer = styled.div(({ url, position }) => ({
  marginLeft: 'calc((100% - 100vw) / 2)',
  marginRight: 'calc((100% - 100vw) / 2)',
  backgroundImage: `url(${url})`,
  backgroundSize: 'cover',
  backgroundPositionY: `${position}em`,
}));

export default BacgroundContainer;
