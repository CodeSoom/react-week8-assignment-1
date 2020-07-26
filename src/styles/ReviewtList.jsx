import styled from '@emotion/styled';

const ResultList = styled.ul({
  margin: '1em 0 0 0',
  padding: 0,
  listStyle: 'none',
  '& li:nth-child(odd)': {
    backgroundColor: '#BDBDBD',
  },
  '& li:nth-child(even)': {
    backgroundColor: '#E0E0E0',
  },
});

export default ResultList;
