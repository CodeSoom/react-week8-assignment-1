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
    </Container>
  );
}
