import styled from '@emotion/styled';

const List = styled.ul({
  listStyle: 'none',
  margin: '0 1em',
  '& button': {
    color: '#000',
    fontWeight: '500',
    border: '0',
    outline: '0',
    cursor: 'pointer',
    borderRadius: '0.7em',
    margin: '0.3em 0',
    fontSize: '1.2em',
    padding: '0.3em 2em',
    backgroundColor: 'rgba(255, 212, 98, 0.7)',
    backdropFilter: 'saturate(180%) blur(5px)',
    '&: focus': {
      transform: 'scale(0.9)',
    },
    '&: hover': {
      backgroundColor: '#F28705',
      border: '1px solid #fff',
      color: '#fff',
    },
  },
});

export default List;
