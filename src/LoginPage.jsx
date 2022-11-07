import ContentsWrap from './component/ContentsWrap';
import Title from './component/Title';
import LoginFormContainer from './LoginFormContainer';

export default function LoginPage() {
  return (
    <ContentsWrap>
      <Title>Log In</Title>
      <LoginFormContainer />
    </ContentsWrap>
  );
}
