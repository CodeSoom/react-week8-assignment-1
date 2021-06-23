import Container from './style/Container';
import LogButton from './style/LogButton';

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
