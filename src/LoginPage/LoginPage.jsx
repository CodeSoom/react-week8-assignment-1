import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import LoginFormContainer from './LoginFormContainer';

const Container = styled.div({
  width: '340px',
  margin: '5em auto',
  padding: '16px',
  border: '1px solid #DBDBDB',
  borderRadius: '16px',
  color: '#555',
});

const LoginHeader = styled.div({
  marginBottom: '16px',
  paddingBottom: '16px',
  borderBottom: '1px solid #DBDBDB',
  lineHeight: 1.5,
  fontWeight: 'bold',
  textAlign: 'center',
});

const Logo = styled.div({
  margin: '0 auto 2px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  width: '96px',
  height: '96px',
  backgroundColor: '#fff',
  boxShadow: '0 3px 6px #010409',

  '& span': {
    marginLeft: '4px',
    fontStyle: 'italic',
  },
});

export default function LoginPage() {
  return (
    <Container>
      <LoginHeader>
        <Logo>
          <FontAwesomeIcon icon={solid('utensils')} />
          <span>EatGo</span>
        </Logo>
        <h2>Log In</h2>
        <span>to continue to EatGo</span>
      </LoginHeader>
      <LoginFormContainer />
    </Container>
  );
}
