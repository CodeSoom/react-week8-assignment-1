import styled from '@emotion/styled';

import slideList from './slideList';
import Slide from './Slide';
import slideControl from './useSlide';

const Wrapper = styled.ul({
  margin: '60px 0 0 0',
  display: 'flex',
  overflow: 'hidden',
});

const SlideBox = styled.li`
  transition: transform 1.5s ease-in;
  transform: ${(props) => `translateX(-${props.count * 300}px)`};
`;

export default function SlideContainer() {
  const elementLength = 6;
  const count = slideControl(elementLength);

  return (
    <Wrapper>
      {
        slideList.map((item) => (
          <SlideBox count={count} key={item.id}>
            <Slide src={item.src} alt={item.alt} />
          </SlideBox>
        ))
      }
    </Wrapper>
  );
}
