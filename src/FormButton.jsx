import styled from '@emotion/styled';

const FormButton = styled.button({
  width: 'fit-content',
  border: 'none',
  backgroundColor: '#EEE',
  padding: '5px',
  borderRadius: '3px',
  cursor: 'pointer',
  marginBottom: '10px',
  '&:hover': {
    color: '#2ecc71',
  },
});

export default FormButton;
