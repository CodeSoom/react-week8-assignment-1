import styled from '@emotion/styled';
import { buttonStyle } from '../../styles/commonStyle';

const Greeting = styled.div({
  fontSize: '2rem',
  lineHeight: '1.5',
  marginBottom: '10rem',
});

const Button = styled.button({
  ...buttonStyle,
  width: '100%',
  height: '45px',
});

export default function LogoutForm({ onClick }) {
  return (
    <>
      <Greeting>
        <p>반갑습니다</p>
        <p>맛집을 찾으러 가볼까요?</p>
      </Greeting>
      <Button
        type="button"
        onClick={onClick}
      >
        Log out
      </Button>
    </>
  );
}
