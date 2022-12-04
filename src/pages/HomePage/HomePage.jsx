import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUtensils, faHouse } from '@fortawesome/free-solid-svg-icons';

import SlideContainer from '../../components/Slide/SlideContainer';

const Container = styled.div({
  position: 'relative',
});

const List = styled.ul({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'absolute',
  top: '-60px',
  right: 0,
  width: '40%',
  height: '100px',
});

const Item = styled.li({
  fontFamily: 'Fredoka One',
  fontSize: '20px',
  fontWeight: 'bold',
  '& a': {
    display: 'block',
    padding: '8px',
    color: '#000000',
  },
  '& a:hover': {
    color: '#A30F0F',
  },
});

const Banner = styled.div({
  backgroundColor: '#A30F0F',
  height: '180px',
  padding: '1rem 2rem',
  position: 'relative',
});

const Text = styled.p({
  fontSize: '2rem',
  fontFamily: 'Black Han Sans',
  color: '#ffffff',
  position: 'absolute',
  top: '30%',
  left: '10%',
});

const Button = styled.div({
  position: 'absolute',
  top: '26%',
  right: '30%',
  cursor: 'pointer',
  backgroundColor: '#E6A721',
  width: '200px',
  height: '60px',
  borderRadius: '15px',
  '& a': {
    display: 'block',
    fontFamily: 'Black Han Sans',
    fontSize: '2rem',
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: '60px',
  },
});

export default function HomePage() {
  return (
    <Container>
      <List>
        <Item>
          <Link to="/about">
            <FontAwesomeIcon icon={faHouse} />
            {' '}
            About
          </Link>
        </Item>
        <Item>
          <Link to="/login">
            <FontAwesomeIcon icon={faUser} />
            {' '}
            Log in
          </Link>
        </Item>
        <Item>
          <Link to="/restaurants">
            <FontAwesomeIcon icon={faUtensils} />
            {' '}
            Restaurants
          </Link>
        </Item>
      </List>
      <SlideContainer />
      <Banner>
        <Text>
          각 지역에서 다양한 맛집을 찾고 싶다면?
        </Text>
        <Button>
          <Link to="/restaurants">바로가기</Link>
        </Button>
      </Banner>
    </Container>
  );
}
