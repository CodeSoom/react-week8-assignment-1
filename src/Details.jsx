import styled from '@emotion/styled';

const Details = styled.div({
  margin: '.6em 1em',
  textAlign: 'center',
  backgroundColor: 'white',
  borderBottom: '3px solid #4CAF50',
  boxShadow: '2px 2px 5px #9E9E9E',
  '& h2': {
    margin: '1em 0 0 0',
    fontSize: '1.8em',
    letterSpacing: '.1em',
  },
  '& h3': {
    marginBottom: 0,
    fontSize: '1.5em',
    letterSpacing: '.2em',
  },
  '& hr': {
    margin: '0 auto',
    width: '20%',
  },
  '& p': {
    margin: '.5em',
    color: '#666',
  },
});

export default Details;
