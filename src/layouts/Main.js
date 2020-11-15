import styled from '@emotion/styled';

const Main = styled.main({
  display: 'flex',
  height: 'calc(100vh - 80px)',
  '& > div': {
    padding: '60px',
    overflow: 'auto',
    '& > h2, & > h3': {
      marginBottom: '20px',
    },
  },
  '& > div.left': {
    minWidth: '300px',
  },
  '& > div.right': {
    flexGrow: 1,
    borderLeft: '1px solid #dedede',
  },
});

export default Main;
