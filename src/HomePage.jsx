import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { colors, mq, styles } from './designSystem';

import { images } from './assets';

const Title = styled.h2({
  ...styles.screenReaderOnly,
});

const List = styled.ul({
  display: 'flex',
  margin: 0,
  marginLeft: '2em',
  padding: 0,
});

const Item = styled.li({
  fontSize: '2.5em',
  fontWeight: 300,
  margin: '.5em',
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

const Image = styled.div({
  marginLeft: '3em',
  width: '100%',
  height: '700px',
  background: `url(${images.restaurant}) no-repeat 0 0/contain`,
  [mq.desktop]: {
    marginLeft: '40em',
    maxWidth: '800px',
  },
});

const Description = styled.div({
  fontSize: '3em',
  fontWeight: 300,
  marginTop: '-4.2em',
  '& span': {
    display: 'block',
    marginLeft: '1.4em',
    '&:first-of-type': {
      color: colors.white,
    },
  },
  '&:before': {
    content: '""',
    display: 'block',
    paddingTop: '.7em',
    width: '15%',
    borderTop: `15px solid ${colors.highlight}`,
  },
});

const LinkWrapper = styled.div({
  fontSize: '2.5em',
  fontWeight: 600,
  margin: '1em 0',
  marginLeft: '1.5em',
  padding: '.5em 1em',
  width: '90%',
  border: `5px solid ${colors.highlight}`,
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
    <>
      <Title>Home</Title>
      <List>
        <Item>
          <Link to="/about">about</Link>
        </Item>
        <Item>
          <Link to="/login">log in</Link>
        </Item>
      </List>
      <Image />
      <Description>
        <span>지금</span>
        <span>가장 가고 싶은</span>
        <span>바로 그 레스토랑,</span>
      </Description>
      <LinkWrapper>
        <Link to="/restaurants">자세히 보기</Link>
      </LinkWrapper>
    </>
  );
}
