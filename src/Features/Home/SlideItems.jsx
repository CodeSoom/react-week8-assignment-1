import styled from '@emotion/styled';

const SlideItem = styled.div`
  width: 280px;
  max-width: 100%;
  height: auto;
`;

const SlideImg = styled.div`
  width: 280px;
  max-width: 100%;
  height: 350px;
  background: ${(props) => `url('../../img/slide/${props.src}.png')`};
  background-size: cover;
  transition: ${(props) => (props.boolean ? '' : 'transform 1.5s ease-in')};
  transform: ${(props) => `translateY(-${props.count * 120}px)`};
  overflow: hidden;
 
  &:hover {
    transform: scale(1.2);
    transition: all ease .5s;
  }
`;

export default function SlideItems({ list }) {
  return (
    <>
      {
        list.map((item) => (
          <SlideItem key={item.id}>
            <SlideImg src={item.src} />
          </SlideItem>
        ))
      }
    </>
  );
}
