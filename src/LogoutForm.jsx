import Container from './style/Container';
import Button from './style/Button';

export default function LogoutForm({ onClick }) {
  return (
    <Container>
      <Button
        type="button"
        onClick={onClick}
      >
        Log out
      </Button>
    </Container>
  );
}
