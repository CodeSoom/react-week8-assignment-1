import styled from '@emotion/styled';

const SlideItem = styled.img({
  margin: '0 8px',
  width: '1000px',
});

export default function Slide({ src, alt }) {
  return (
    <SlideItem src={src} alt={alt} />
  );
}
