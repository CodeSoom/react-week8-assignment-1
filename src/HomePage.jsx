import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { colors, styles } from './designSystem';

import { images } from './assets';

const Title = styled.h2({
  ...styles.screenReaderOnly,
});

const List = styled.ul({
  display: 'flex',
  justifyContent: 'flex-end',
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

const ContentWrapper = styled.div({
  position: 'relative',
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
    width: '5%',
    borderTop: `5px solid ${colors.highlight}`,
  },
});

const LinkWrapper = styled.div({
  fontSize: '1.1em',
  fontWeight: 600,
  margin: '.5em 2.5em',
  padding: '.5em 1em',
  width: '15%',
  border: `2px solid ${colors.highlight}`,
  borderRadius: 50,
  background: `url(${images.icons.arrow}) no-repeat 90% 50%`,
  '& a': {
    display: 'inline-block',
    color: colors.highlight,
    textDecoration: 'none',
  },
});

const Image = styled.img({
  position: 'absolute',
  top: 0,
  right: 0,
  paddingLeft: '22em',
  width: '90%',
  hieght: 'auto',
});

export default function HomePage() {
  return (
    <>
      <div>
        <Title>Home</Title>
        <List>
          <Item>
            <Link to="/about">about</Link>
          </Item>
          <Item>
            <Link to="/login">log in</Link>
          </Item>
        </List>
      </div>
      <ContentWrapper>
        <Slogan>
          <span>지금</span>
          <span>가장 가고 싶은</span>
          <span>바로 그 레스토랑,</span>
        </Slogan>
        <LinkWrapper type="button">
          <Link to="/restaurants">자세히 보기</Link>
        </LinkWrapper>
        <Image
          src={images.restaurant}
          alt=""
        />
      </ContentWrapper>
    </>
  );
}
