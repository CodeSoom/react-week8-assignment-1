import styled from '@emotion/styled';

export default function LogoutForm({ onClick }) {
  return (
    <>
      <LogoutButton
        type="button"
        onClick={onClick}
      >
        Log out
      </LogoutButton>
    </>
  );
}

const LogoutButton = styled.button`
  margin-top: 1em;
  padding: 0.5em 1.5em;
  border: 1px solid #000;
  border-radius: 5px;

  &:hover {
    color: #FFF;
    background-color: #000;
  }
`;
