import styled from '@emotion/styled';

import Button from './style/Button';

const LoginBox = styled.div({
  width: '60%',
  height: '30%',
  margin: '0 auto',
  textAlign: 'center',
});
export default function LogoutForm({ onClick }) {
  return (
    <LoginBox>
      <Button
        type="button"
        onClick={onClick}
      >
        Log out
      </Button>
    </LoginBox>
  );
}
