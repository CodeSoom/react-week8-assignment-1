const breakpoints = [600, 1200];

const MediaQueay = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`,
);

export default MediaQueay;
