import styled from '@emotion/styled';

import LoginFormContainer from './LoginFormContainer';

export default function LoginPage() {
  return (
    <div>
      <SubTitle>Log In</SubTitle>
      <LoginFormContainer />
    </div>
  );
}

const SubTitle = styled.h2`
  font-size: 1.5em;
`;
