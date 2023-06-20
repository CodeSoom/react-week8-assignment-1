import styled from '@emotion/styled';

import Container from '../../styles/Container';

import LoginFormContainer from './LoginFormContainer';

const Wrapper = styled.div`
  padding-top: 80px;
  border-top: 1px solid #ddd;
  &>div{
    min-height: 0;
  }
`;

const LoginBox = styled.div`
  width: 500px;
  padding: 50px 20px;
  border: 1px solid #ddd;
  border-radius: 17px;
  margin: 0 auto;
  text-align: center;
  box-shadow: 1px 3px #e6e6e6;
`;

const Logo = styled.h1`
    padding: 10px;
    width: 180px;
    height: 180px;
    line-height: 180px;
    border-radius: 50%;
    box-shadow: 1px 2px #dbd8d8b3;
    background: #f3f3f373;
    margin: 0 auto;
    & img{
      width:100%;
    }
`;

const LoginText = styled.h2`
  font-size: 3rem;
  color: #707377;
  margin: 2rem 0 3rem 0;
`;

export default function LoginPage() {
  return (
    <Wrapper>
      <Container>
        <LoginBox>
          <Logo>
            <img src="/img/logo.png" alt="Eat-Go 로고" />
          </Logo>
          <LoginText>Log In</LoginText>
          <LoginFormContainer />
        </LoginBox>
      </Container>
    </Wrapper>
  );
}
