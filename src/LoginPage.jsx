import styled from '@emotion/styled';

import LoginFormContainer from './LoginFormContainer';

const Title = styled.h2({
  fontsize: '1.5em',
});

export default function LoginPage() {
  return (
    <div>
      <Title>Log In</Title>
      <LoginFormContainer />
    </div>
  );
}
