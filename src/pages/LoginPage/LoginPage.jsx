import styled from '@emotion/styled';

import LoginFormContainer from '../../components/LoginForm/LoginFormContainer';

const Container = styled.div({
  width: '600px',
  height: '500px',
  margin: '16px auto',
  border: '1px solid #cccccc',
  padding: '8px 16px',
});

const Title = styled.h2({
  fontFamily: 'Roboto',
  fontSize: '32px',
  textAlign: 'center',
  marginBottom: '32px',
});

export default function LoginPage() {
  return (
    <Container>
      <Title>Log In</Title>
      <LoginFormContainer />
    </Container>
  );
}
