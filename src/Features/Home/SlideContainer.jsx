import styled from '@emotion/styled';
import { useState, useEffect, useRef } from 'react';
import SlideItems from './SlideItems';

const Container = styled.div`
  height: 89vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const SlideBox = styled.div`
  height: 89vh;
  display: flex;
  margin: 0 2rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:nth-of-type(2) {
    padding-bottom: 20rem;
  }
`;

const SlideElements = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 1.5s ease-in;
  transform: ${(props) => `translateY(-${props.count * 120}px)`};
  & div {
    margin: 10px 0;
    width: 250px;
    border-radius: 20px;
    overflow: hidden;
  }
`;

export default function SlideContainer() {
  const elementLength = 5;
  const [count, setCount] = useState(0);
  const boolean = useRef(false);

  useEffect(() => {
    const timer = setInterval(
      () => {
        if (count < elementLength - 1) {
          boolean.current = false;
          setCount((prev) => prev + 1);
        } else {
          boolean.current = true;
          setCount(0);
        }
      },
      boolean.current ? 0 : 2500,
    );

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const slideList = [
    {
      id: 1,
      list: [
        { id: 1, src: 'slide-food-1' },
        { id: 2, src: 'slide-food-2' },
        { id: 3, src: 'slide-food-3' },
        { id: 4, src: 'slide-food-4' },
        { id: 5, src: 'slide-food-1' },
      ],
    },

    {
      id: 2,
      list: [
        { id: 1, src: 'slide-food-3' },
        { id: 2, src: 'slide-food-4' },
        { id: 3, src: 'slide-food-5' },
        { id: 4, src: 'slide-food-6' },
        { id: 5, src: 'slide-food-3' },
      ],
    },
    {
      id: 3,
      list: [
        { id: 1, src: 'slide-food-6' },
        { id: 2, src: 'slide-food-7' },
        { id: 3, src: 'slide-food-8' },
        { id: 4, src: 'slide-food-9' },
        { id: 5, src: 'slide-food-6' },
      ],
    },
  ];

  return (
    <Container>
      {
        slideList.map((slide) => (
          <SlideBox key={slide.id}>
            <SlideElements count={count} boolean={boolean.current}>
              <SlideItems list={slide.list} />
            </SlideElements>
          </SlideBox>
        ))
      }
    </Container>
  );
}
