import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import SlideContainer from './SlideContainer';
import { buttonStyle, containerStyle } from '../../styles/commonStyle';
import Background from '../../styles/Background';

const Container = styled.div({
  ...containerStyle,
  display: 'flex',
  justifyContent: 'space-between',
});

const Main = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  marginBottom: '15rem',

  '& h2': {
    fontSize: '3.5rem',
    fontWeight: '400',
    padding: '1rem 0',
  },

  '& h1': {
    fontSize: '7rem',
    padding: '2rem 0 5rem',
  },
});

const Button = styled.button({
  ...buttonStyle,
  width: '235px',
  height: '70px',
  borderRadius: '50px',
  fontSize: '2rem',
  fontWeight: 'bold',
});

export default function HomePage() {
  return (
    <Background>
      <Container>
        <Main>
          <h2>솔직한 리뷰, 믿을 수 있는 평점</h2>
          <h1>Eat-go</h1>
          <Button
            type="button"
          >
            <Link to="/restaurants">
              Start
            </Link>
          </Button>
        </Main>
        <SlideContainer />
      </Container>
    </Background>
  );
}
