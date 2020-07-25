import styled from '@emotion/styled';

import MediaQuery from './MediaQuery';

const DefaultList = styled.ul({
  display: 'flex',
  padding: 0,
  margin: 0,
  listStyle: 'none',
});

const CardList = styled.ul({
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: 'border-box',
  listStyle: 'none',
  [MediaQuery[0]]: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 -1rem',
  },
});

export {
  DefaultList,
  CardList,
};
