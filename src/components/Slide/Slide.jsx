import styled from '@emotion/styled';

const SlideItem = styled.img(({ count }) => ({
  width: '1200px',
  objectFit: 'cover',
  flexShrink: '0',
  transform: `translateX(${-1200 * count}px)`,
  transition: 'all 1s ease-in',
}));

export default function Slide({ src, alt, count }) {
  return (
    <SlideItem src={src} alt={alt} count={count} />
  );
}
