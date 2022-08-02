import styled from '@emotion/styled';

const Button = styled.button({
  display: 'block',
  margin: '1rem auto 0',
  padding: '0.75rem 0.75rem',
  width: '15rem',
  border: '2px solid #fa5252',
  borderRadius: '0.4rem',
  color: '#fa5252',
  fontSize: '1.6rem',
  fontWeight: 'bold',
  cursor: 'pointer',
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
