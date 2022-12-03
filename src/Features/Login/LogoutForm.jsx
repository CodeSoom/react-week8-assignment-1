import styled from '@emotion/styled';

const Greeting = styled.div`
  font-size: 2rem;
  line-height: 1.5;
  margin-bottom: 10rem;
`;

const Button = styled.button`
  width: 100%;
  height: 45px;
  color : #ffffff;
  background: #DB0816;
`;

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
