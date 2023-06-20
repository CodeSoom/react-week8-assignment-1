import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import Container from '../../styles/Container';
import Button from '../../styles/Button';
import SlideContainer from './SlideContainer';

const Home = styled.div({
  backgroundColor: '#FF5F00',
  width: '100%',
  '& >div': {
    width: '100%',
  },
});

const HomeTiteBox = styled.div({
  width: '90%',
  margin: '0 auto',
  paddingTop: '170px',
  textAlign: 'center',
  color: '#fff',
  '& >h2': {
    fontSize: '5rem',
  },
  '& >p': {
    fontSize: '2.8rem',
    lineHeight: '0.5rem',
    margin: '4rem 0',
  },
});

export default function HomePage() {
  return (
    <Home>
      <Container>
        <HomeTiteBox>
          <h2>오늘은 뭐 먹지?</h2>
          <p>한 눈에 볼 수 있는 음식점 리뷰와 평점</p>
          <p>지금 바로 Eat-Go를 이용해보세요.</p>
          <Button
            type="button"
          >
            <Link to="/restaurants">
              Go !
            </Link>
          </Button>
        </HomeTiteBox>
        <SlideContainer />
      </Container>
    </Home>
  );
}
