import React from 'react';

import styled from '@emotion/styled';

const BackgroundStyle = styled.div({
  position: 'fixed',
  height: '100%',
  width: '95%',
  margin: '0 auto',
  zIndex: '-100',
  opacity: '0.85',
  '& div': {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row-reverse',
    width: '100%',
    height: '75%',
    top: '25%',
    overflow: 'hidden',
    textAlign: 'end',
    '& p': {
      writingMode: 'vertical-rl',
      fontFamily: "'Playfair Display', serif",
    },
    '& p:nth-child(1)': {
      fontSize: '18em',
      color: '#FF91AC',
      textShadow: '-8px 8px #EEB8C5',
      fontWeight: '600',
    },
    '& p:nth-child(2)': {
      marginTop: '1.5em',
      fontSize: '8em',
      fontWeight: '600',
      color: '#FA4571',
      zIndex: '-3',
    },
  },
  '& img': {
    position: 'absolute',
    top: '15%',
    right: '8%',
    width: 'auto',
    height: 'auto',
    maxWidth: '40%',
    maxHeight: '40%',
    transform: 'rotate(-90deg)',
    zIndex: '-4',
  },
});

export default function Background() {
  return (
    <BackgroundStyle>
      <div>
        <p>RESTAURANT</p>
        <p>RESTAURANT</p>
      </div>
      <img alt="" src="../assets/images/homePage.jpg" />
    </BackgroundStyle>
  );
}
