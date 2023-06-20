import { useState, useEffect } from 'react';

import styled from '@emotion/styled';

import Slide from './Slide';

import { slideList } from './slide_img';

const Container = styled.div({
  display: 'flex',
  width: '1200px',
  height: '600px',
  margin: '16px 0 0',
});

export default function SlideContainer() {
  const [count, setCount] = useState(0);
  const slideListLength = slideList.length;

  useEffect(() => {
    setInterval(() => {
      setCount((prev) => (prev + 1) % slideListLength);
    }, 3000);
  }, []);

  return (
    <Container>
      {
        slideList.map((item) => (
          <Slide
            key={item.id}
            src={item.src}
            alt={item.alt}
            count={count}
          />
        ))
      }
    </Container>
  );
}
