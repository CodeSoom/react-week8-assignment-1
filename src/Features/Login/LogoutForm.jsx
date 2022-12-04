import styled from '@emotion/styled';

const Button = styled.button`
  width:100%;
  padding:1rem 3rem;
  background-color:#FF5F00;
  color:#fff;
  margin-top: 50px;
  border-radius: 10px;
  &:hover{
    opacity:.7;
  }
`;

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
