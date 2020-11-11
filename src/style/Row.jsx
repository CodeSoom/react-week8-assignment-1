import styled from '@emotion/styled';

const Row = styled.ul({
  display: 'flex',
  listStyle: 'none',
  padding: '1rem 1rem',
  overflowY: 'hidden',
  '&::-webkit-scrollbar': {
    width: 0,
  },
});

export default Row;
