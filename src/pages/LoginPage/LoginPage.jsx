import styled from '@emotion/styled';

import LoginFormContainer from '../../components/LoginForm/LoginFormContainer';

const Container = styled.div({
  width: '600px',
  height: '600px',
  margin: '16px auto',
  padding: '8px 16px',
  position: 'relative',
  border: '1px solid #cccccc',
  boxShadow: '2px 2px 3px rgb(163, 15, 15, .3)',
});

const Title = styled.h2({
  fontFamily: 'Roboto',
  fontSize: '32px',
  textAlign: 'center',
  padding: '24px',
  color: '#000000',
  marginBottom: '32px',
  borderBottom: '1px solid #cccccc',
});

export default function LoginPage() {
  return (
    <Container>
      <Title>Log In</Title>
      <LoginFormContainer />
    </Container>
  );
}
