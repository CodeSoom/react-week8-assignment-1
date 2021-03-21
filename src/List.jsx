import styled from '@emotion/styled';

const List = styled.ul({
  margin: '50px 10px',
  overflow: 'scroll',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  listStyle: 'none',
  padding: '0',
  '&::-webkit-scrollbar': {
    backgroundColor: 'transparent',
  },
  '&::-webkit-scrollbar-corner': {
    backgroundColor: 'transparent',
  },
  '& button': {
    fontFamily: 'Do Hyeon',
    fontSize: '20px',
    color: 'white',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: 'teal',
    border: '3px solid black',
    margin: '0 10px',
    cursor: 'pointer',
    '&:focus': {
      outline: 'none',
    },
  },
});

export default List;
