import styled from '@emotion/styled';

const ResultList = styled.ul({
  margin: '1em 0 0 0',
  padding: 0,
  listStyle: 'none',
  '& li:nth-of-type(odd)': {
    backgroundColor: '#BDBDBD',
  },
  '& li:nth-of-type(even)': {
    backgroundColor: '#E0E0E0',
  },
});

export default ResultList;
