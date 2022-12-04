import styled from '@emotion/styled';

const Button = styled.button({
  display: 'block',
  width: '180px',
  padding: '8px 16px',
  cursor: 'pointer',
  fontSize: '16px',
  margin: '24px auto',
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
