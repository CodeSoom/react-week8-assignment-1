import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import Container from '../../styles/Container';
import Button from '../../styles/Button';

const AboutContainer = styled.div`
  &>div:nth-of-type(2){
  min-height:auto; 
}
`;

const Banner = styled.div`
  width:100%;
  height:420px;
  background:url(/img/about.jpg) no-repeat center;
  background-size:cover;
  position:relative;
  & div{
    color: #fff;
    position: absolute;
    top: 50%;
    left:10%;
    transform: translateY(-50%);
    & h3{
      font-size:6rem;
    }
    & p{
      font-size:2.8rem;
      margin-top:1rem;
    }
  }
`;

const Contents = styled.div`
  margin: 10rem 0px;
`;

const Text = styled.div`
  & h4{
    font-size:3rem;
  }
  & p{
    font-size:2rem;
    margin-top: 2rem;
    line-height: 2.4rem;
  }
  & button {
    background-color:#FF5F00;
    color:#fff;
    margin:5rem 0;
  }
`;

export default function AboutPage() {
  return (
    <AboutContainer>
      <Banner>
        <div>
          <h3>
            About Eat Go
          </h3>
          <p>
            Eat-Go를 통해 먹는 즐거움을 느껴보세요.
          </p>
        </div>
      </Banner>
      <Container>
        <Contents>
          <Text>
            <h4>
              👩‍🍳 음식점을 알아보는 가장 쉬운 방법 !
            </h4>
            <p>
              지역과 음식 카테고리를 선택하면 해당 음식점과 리뷰를 볼 수 있어요.
              <br />
              평점과 리뷰를 직접 남길 수 있으니 지금 이용해보세요.
            </p>
            <Button
              type="button"
            >
              <Link to="/restaurants">
                Go !
              </Link>
            </Button>
          </Text>
        </Contents>
      </Container>
    </AboutContainer>
  );
}
