import styled from '@emotion/styled';

const Button = styled.button({
  display: 'block',
  width: '180px',
  padding: '12px 16px',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 'bold',
  fontFamily: 'Roboto',
  margin: '24px auto',
  backgroundColor: '#A30F0F',
  borderRadius: '5px',
  color: '#ffffff',
  border: '1px solid #A30F0F',
});

export default function LogoutForm({ onClick }) {
  return (
    <>
      <Button
        type="button"
        onClick={onClick}
      >
        Log out
      </Button>
    </>
  );
}
