import styled from '@emotion/styled';

const CriteriaList = styled.ul({
  display: 'flex',
  listStyle: 'none',
  padding: '1rem 0',
  overflowY: 'hidden',
  transform: 'translate(-.5rem)',
  '&::-webkit-scrollbar': {
    width: 0,
  },
  height: '7.5rem',
});

export default CriteriaList;
