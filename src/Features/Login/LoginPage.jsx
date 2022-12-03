import styled from '@emotion/styled';

import LoginFormContainer from './LoginFormContainer';

const Background = styled.div`
  background: url(../../../img/main-bg.png);
  width: 100%;
  height: 89vh;
  background-size: cover;
`;

const LoginBox = styled.div`
  background: #ffffff;
  width: 500px;
  height: 500px;
  padding: 5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  -webkit-box-shadow: 5px 5px 8px 0px #CBCBCB; 
  box-shadow: 5px 5px 8px 0px #CBCBCB;  

  & h2 {
    font-size: 5rem;
    font-weight: 800;
    position: relative;
    margin-bottom: 10rem;

    &::after {
      display: block;
      content: '';
      position: absolute;
      top: 0;
      left: 170px;
      width: 15px;
      height: 15px;
      background-color: #DB0816;
      border-radius: 50px;
    }
  }
`;

export default function LoginPage() {
  return (
    <Background>
      <LoginBox>
        <h2>Log In</h2>
        <LoginFormContainer />
      </LoginBox>
    </Background>
  );
}
