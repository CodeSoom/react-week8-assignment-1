import Container from './Container';
import Title from './Title';

import LoginFormContainer from './LoginFormContainer';

export default function LoginPage() {
  return (
    <Container>
      <Title>Log In</Title>
      <LoginFormContainer />
    </Container>
  );
}
