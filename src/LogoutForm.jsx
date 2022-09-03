import styled from '@emotion/styled';

const Button = styled.button({
  height: '30px',
  width: '220px',
  marginBottom: '20px',
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
