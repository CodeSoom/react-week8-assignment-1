import styled from '@emotion/styled';

export const Title = styled.h2({
  fontFamily: "'Playfair Display', serif",
  fontSize: '3em',
  color: '#F73463',
});

export const Container = styled.div({
  position: 'absolute',
  top: '35%',
  width: '30%',
  height: 'auto',
});


export const InputBox = styled.div({
  color: '#FF91AC',
  '& label': {
    display: 'block',
    fontFamily: "'Playfair Display', serif",
    marginBottom: '0.5em',
    marginTop: '0.5em',
    fontSize: '1.1em',
  },

  '& input': {
    width: '50%',
    height: '30px',
    border: '0.3px solid #FF91AC',
  },
});
