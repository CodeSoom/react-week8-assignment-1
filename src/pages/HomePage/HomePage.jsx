import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

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
  fontFamily: 'Roboto',
  fontSize: '20px',
  '& a': {
    display: 'block',
    padding: '8px',
    color: '#000000',
  },
});

export default function HomePage() {
  return (
    <Container>
      <List>
        <Item><Link to="/about">About</Link></Item>
        <Item><Link to="/login">Log in</Link></Item>
        <Item><Link to="/restaurants">Restaurants</Link></Item>
        <Item><Link to="/xxx">멸망의 길</Link></Item>
      </List>
      <SlideContainer />
    </Container>
  );
}
