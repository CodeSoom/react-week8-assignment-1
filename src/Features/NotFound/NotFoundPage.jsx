import styled from '@emotion/styled';
import Container from '../../styles/Container';

const Wrapper = styled.div`
  background-color: #e1e1e1;
`;

const NotPoundText = styled.div`
  font-size:6rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  & span{
    font-size: 3rem;
    display: inline-block;
    margin-left: 3rem;
    padding-left: 3rem;
    border-left: 1px solid #918989;
  }
`;

export default function NotFoundPage() {
  return (
    <Wrapper>
      <Container>
        <NotPoundText>
          404
          <span>
            This Page could not be found.
          </span>
        </NotPoundText>
      </Container>
    </Wrapper>
  );
}
