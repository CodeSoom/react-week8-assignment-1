import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import colors from './style/colors';
import Container from './style/Container';
import Title from './style/Title';

const List = styled.ul({
  display: 'flex',
  float: 'right',
  padding: '0 2.5em',
  textAlign: 'center',
});

const Item = styled.li({
  width: '10em',
  height: '3em',
  margin: '0 .5em',
  padding: '.4em .8em',
  border: `${colors.border_green} solid 1px`,
  borderRadius: '1em',
  fontSize: '.5em',
  lineHeight: '2em',
  '& a': {
    color: `${colors.text_primary}`,
    '&:hover': {
      color: `${colors.text_secondary}`,
      fontWeight: '700',
    },
  },
});

export default function HomePage() {
  return (
    <Container>
      <Title>Home</Title>
      <List>
        <Item><Link to="/about">About</Link></Item>
        <Item><Link to="/login">Log in</Link></Item>
        <Item><Link to="/restaurants">Restaurants</Link></Item>
        <Item><Link to="/xxx">멸망의 길</Link></Item>
      </List>
    </Container>
  );
}
