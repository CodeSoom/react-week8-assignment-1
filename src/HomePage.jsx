import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { colors, styles } from './designSystem';

import { images } from './assets';

const Container = styled.div({
  overflow: 'hidden',
});

const Title = styled.h2({
  ...styles.screenReaderOnly,
});

const List = styled.ul({
  display: 'flex',
  float: 'right',
  margin: 0,
  padding: 0,
});

const Item = styled.li({
  fontSize: '1.5em',
  fontWeight: 300,
  margin: '1em',
  '& a': {
    display: 'inline-block',
    color: '#333',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
});

const Image = styled.img({
  paddingLeft: '22em',
  width: '100%',
  hieght: 'auto',
});

const ContentWrapper = styled.div({
  display: 'inline-block',
  marginTop: '-15em',
  padding: '0 2em',
});

const Slogan = styled.div({
  fontSize: '2em',
  fontWeight: 300,
  '& span': {
    display: 'block',
    marginLeft: '1.5em',
  },
  '&:before': {
    content: '""',
    display: 'inline-block',
    marginLeft: '1em',
    paddingTop: '.2em',
    width: '20%',
    borderTop: `5px solid ${colors.highlight}`,
  },
});

const LinkWrapper = styled.div({
  fontSize: '1.1em',
  fontWeight: 600,
  display: 'inline-block',
  margin: '.5em 2.5em',
  padding: '.5em 1em',
  width: '80%',
  border: `2px solid ${colors.highlight}`,
  borderRadius: 50,
  background: `url(${images.icons.arrow}) no-repeat 95% 50%/10%`,
  '& a': {
    display: 'inline-block',
    color: colors.highlight,
    textDecoration: 'none',
  },
});

export default function HomePage() {
  return (
    <Container>
      <Title>Home</Title>
      <List>
        <Item>
          <Link to="/about">about</Link>
        </Item>
        <Item>
          <Link to="/login">log in</Link>
        </Item>
      </List>
      <Image
        src={images.restaurant}
        alt=""
      />
      <ContentWrapper>
        <Slogan>
          <span>지금</span>
          <span>가장 가고 싶은</span>
          <span>바로 그 레스토랑,</span>
        </Slogan>
        <LinkWrapper>
          <Link to="/restaurants">자세히 보기</Link>
        </LinkWrapper>
      </ContentWrapper>
    </Container>
  );
}
