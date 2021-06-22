import Container from './Container';
import LogButton from './LogButton';

export default function LogoutForm({ onClick }) {
  return (
    <Container>
      <LogButton
        type="button"
        onClick={onClick}
      >
        Log out
      </LogButton>
    </Container>
  );
}
