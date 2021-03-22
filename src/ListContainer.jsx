import styled from '@emotion/styled';

const ListContainer = styled.div({
  width: '80%',
  height: '90px',
  margin: '0 auto',
  overflow: 'scroll',
  '&::-webkit-scrollbar': {
    backgroundColor: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
  '&::-webkit-scrollbar-corner': {
    backgroundColor: 'transparent',
  },
});

export default ListContainer;
