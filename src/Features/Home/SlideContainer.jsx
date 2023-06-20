import styled from '@emotion/styled';

import SlideItems from './SlideItems';
import slideList from '../../data/slideList';
import useSlide from '../../hooks/useSlide';

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

  const count = useSlide(elementLength);

  return (
    <Container>
      {
        slideList.map((slide) => (
          <SlideBox key={slide.id}>
            <SlideElements count={count}>
              <SlideItems list={slide.list} />
            </SlideElements>
          </SlideBox>
        ))
      }
    </Container>
  );
}
