import styled from '@emotion/styled';

import LoginFormContainer from './LoginFormContainer';

const Title = styled.h2({
  fontSize: '40px',
  fontWeight: 'bold',
  marginBottom: '20px',
});

export default function LoginPage() {
  return (
    <div>
      <Title>Log In</Title>
      <LoginFormContainer />
    </div>
  );
}
