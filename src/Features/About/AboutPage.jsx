import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const SubBanner = styled.div({
  width: '100vw',
  height: '400px',
  background: 'url(../../../img/sub-bg1.png)',
  backgroundSize: 'cover',
  position: 'relative',

});

const SubDescription = styled.div({
  width: '90%',
  margin: '0 auto',
  position: 'absolute',
  left: '8rem',
  bottom: '6rem',

  '& h2': {
    color: '#ffffff',
    fontSize: '6rem',
    marginBottom: '1rem',
  },

  '& div': {
    display: 'flex',
    alignItems: 'flex-end',

    '& h1': {
      color: '#ffffff',
      fontSize: '9rem',
      marginRight: '5rem',
      fontWeight: '800',
      position: 'relative',

      '&:after': {
        position: 'absolute',
        top: 0,
        right: '-25px',
        display: 'block',
        content: '""',
        width: '15px',
        height: '15px',
        backgroundColor: '#DB0816',
        borderRadius: '50px',
      },
    },

    '& p': {
      color: '#ffffff',
      fontWeight: '300',
      fontSize: '2.5rem',
    },
  },
});

const Container = styled.div({
  width: '90%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '7rem',

  '& h2': {
    fontSize: '3.5rem',
    marginBottom: '2rem',
  },

  '& p': {
    fontSize: '2rem',
    lineHeight: '1.5',
    marginBottom: '3rem',
  },
});

const Button = styled.button({
  width: '235px',
  height: '70px',
  backgroundColor: '#DB0816',
  borderRadius: '50px',
  color: '#ffffff',
  fontSize: '2rem',
  fontWeight: 'bold',
});

export default function AboutPage() {
  return (
    <div>
      <SubBanner>
        <SubDescription>
          <h2>About</h2>
          <div>
            <h1>Eat-go</h1>
            <p>맛있는 발견의 즐거움을 당신에게 드립니다</p>
          </div>
        </SubDescription>
      </SubBanner>
      <Container>
        <h2>“믿을만한 맛집을 소개하고 맛있는 경험을 주는 서비스”</h2>
        <p>
          홍보로 가득한 맛집 홍보글에 지친 당신에게
          솔직한 리뷰와 정확한 정보를 바탕으로 맛집을 추천하는 서비스를 제공합니다.
          지금 바로 시작해보세요.
        </p>
        <Button>
          <Link to="/restaurants">
            start
          </Link>
        </Button>
      </Container>
    </div>
  );
}
