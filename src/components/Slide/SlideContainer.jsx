import styled from '@emotion/styled';

import Slide from './Slide';

import { slideList } from './slide_img';

const Container = styled.div({
  display: 'flex',
  height: '600px',
  margin: '16px 0 0',
  position: 'relative',
});

export default function SlideContainer() {
  return (
    <Container>
      {
        slideList.map((item) => (
          <Slide key={item.id} src={item.src} alt={item.alt} />
        ))
      }
    </Container>
  );
}
