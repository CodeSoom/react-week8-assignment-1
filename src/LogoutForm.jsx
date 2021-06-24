import styled from '@emotion/styled';

const Button = styled.div({
  appearance: 'none',
  background: '#dc3545',
  color: '#fff',
  margin: 0,
  padding: '8px 16px',
  fontSize: '16px',
  textAlign: 'center',
  border: 'none',
  borderRadius: '4px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  cursor: 'pointer',
  transition: '0.5s',
  '&:active, &:hover, &:focus': {
    background: '#c82333',
    outline: 0,
  },
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
