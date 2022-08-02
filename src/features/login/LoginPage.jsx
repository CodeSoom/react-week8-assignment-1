import styled from '@emotion/styled';

import LoginFormContainer from './LoginFormContainer';

const Title = styled.h2({
  marginBottom: '2rem',
  color: '#000000',
  textAlign: 'center',
  fontSize: '3.5rem',
});

export default function LoginPage() {
  return (
    <div>
      <Title>Log In</Title>
      <LoginFormContainer />
    </div>
  );
}
