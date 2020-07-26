import styled from '@emotion/styled';

const ResultItem = styled.li(() => ({
  marginBottom: '.5em',
  borderRadius: '.5em',
  padding: '.6em 1.2em',
  '& > div:first-child': {
    marginBottom: '.5em',
  },
  '& > div:last-child': {
    color: '#424242',
    fontSize: '1.1em',
    fontWeight: 'bold',
  },
  '& > div > span:first-child': {
    color: '#424242',
    fontSize: '1em',
    fontWeight: 'bold',
  },
  '& > div > span:last-child': {
    color: '#424242',
    fontSize: '1.1em',
    fontWeight: 'bold',
    marginLeft: '.5em',
  },
}));


export default ResultItem;
