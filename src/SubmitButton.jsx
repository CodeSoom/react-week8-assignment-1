import styled from '@emotion/styled';

const SubmitButton = styled.button({
  marginTop: '1.5em',
  border: '0',
  outline: '0',
  borderRadius: '1em',
  fontSize: '1em',
  padding: '0.5em 2em',
  fontFamily: "'Playfair Display', serif",
  cursor: 'pointer',
  backgroundColor: '#F28705',
  '&: hover': {
    backgroundColor: '#A60303',
    color: '#fff',
  },
  '&: focus': {
    transform: 'scale(0.97)',
  },
});

export default SubmitButton;
