import styled from '@emotion/styled';

const SlideItem = styled.img`
  width: 540px;
  height: auto;
  margin: 0 16px;
  border-radius: 25px;
`;

export default function Slide({ src, alt }) {
  return (
    <SlideItem src={src} alt={alt} />
  );
}
