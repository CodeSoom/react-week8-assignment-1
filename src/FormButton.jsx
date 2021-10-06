import styled from '@emotion/styled';

const FormButton = styled.button({
  marginBottom: '1em',
  border: 'none',
  borderRadius: '.3em',
  padding: '.3em',
  width: 'fit-content',
  backgroundColor: '#EEE',
  cursor: 'pointer',
  '&:hover': {
    color: '#2ecc71',
  },
});

export default FormButton;
